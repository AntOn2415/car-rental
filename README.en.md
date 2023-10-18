# Car Rental App

This is a web application for a car rental company in Ukraine. The application allows users to
browse and rent cars. It consists of three main pages:

1. Home Page:

   The home page provides a general description of the services offered by the company. It is
   designed with user-friendly styling and presentation.

2. Catalog Page:

   The catalog page displays a list of cars available for rent. Users can filter the cars by make,
   hourly rental price, and mileage. The page initially renders 8 advertisements, and more can be
   loaded by clicking the "Load more" button.

3. Favorites Page:

   The favorites page shows the advertisements that users have added to their favorites. Users can
   add or remove advertisements from their favorites list. The page also keeps track of the user's
   favorites even after refreshing the page.

## Technical Details

The application is built using React and React Router for routing. It uses a custom backend API
created with Mockapi.io to manage advertisements. The API includes the following fields for each
advertisement: id, year, make, model, type, img, description, fuelConsumption, engineSize,
accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, and mileage.

The application includes the following functionality:

- Users can view and filter advertisements in the catalog.
- Users can add advertisements to their favorites list.
- Users can view detailed information about each advertisement in a modal window.
- The modal window can be closed by clicking the "x" button, clicking outside the modal, or pressing
  the "Esc" key.
- Users can contact the rental company by clicking the "Rental car" link, which provides the
  company's phone number.

## Additional Features

The application also includes additional features:

- Filtering: Users can filter advertisements by car make, hourly rental price, and mileage range.
- Pagination: The catalog page uses pagination to display a limited number of advertisements per
  page.
- User Interaction: The application provides feedback to users when they add or remove
  advertisements from their favorites list.
- UI Enhancements: The UI is designed to be visually appealing and user-friendly.

## Usage

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run npm install to install the required dependencies.
4. Run npm start to start the development server.
5. Open your web browser and go to http://localhost:3000 to use the application.

Deployment

The application is deployed on GitHub Pages `https://github.com`. You can access it online here
`https://github.com/AntOn2415/car-rental`.

Enjoy exploring and renting cars with our Car Rental App!
