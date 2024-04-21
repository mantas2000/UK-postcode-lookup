# UK Postcode Lookup

This is a React application that allows users to lookup details of UK postcodes using the Postcodes.io API. Users can enter a postcode, view its details, and see a history of recently searched postcodes.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 12 or above)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/mantas2000/UK-postcode-lookup.git
   ```

2. Navigate to the project directory:

   ```bash
   cd uk-postcode-lookup-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This will start the application in development mode and open it in your default browser at [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter a valid UK postcode in the input field and click the "Lookup Postcode" button.
2. If the postcode is valid, the application will display the postcode details, including the country, longitude, latitude, and admin district.
3. The searched postcode will be added to the postcode history list below the form.
4. To view the details of a previously searched postcode, click the "View" button next to the postcode in the history list.
5. To remove a postcode from the history list, click the "Remove" button next to the postcode.
