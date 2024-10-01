const { google } = require("googleapis");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// Load OAuth2 credentials from the downloaded JSON file
const credentials = JSON.parse(
  fs.readFileSync("path/to/your/oauth2client.json")
);
const { client_secret, client_id, redirect_uris } = credentials.installed;

const app = express();
app.use(bodyParser.json());

// Set up Google OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// Authorize with access tokens
oAuth2Client.setCredentials({
  access_token: "your_access_token",
  refresh_token: "your_refresh_token",
  // You can refresh tokens automatically here
});

// Sheets API setup
const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

// Endpoint to submit rating
app.post("/submit-rating", async (req, res) => {
  const { recipeName, rating } = req.body;
  const timestamp = new Date().toISOString();

  try {
    // Append the rating data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: "your_google_sheet_id",
      range: "Sheet1!A:C", // Adjust the range as needed
      valueInputOption: "RAW",
      requestBody: {
        values: [[recipeName, rating, timestamp]],
      },
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Error submitting rating: ", err);
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
