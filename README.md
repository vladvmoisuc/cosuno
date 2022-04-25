# Project built as an assignment for Cosuno

Create a simple React application that shows a list of construction companies, each with the
following information:

- Company name
- Logo (you may use a placeholder image, e.g. using https://placekitten.com/)
- Specialties (e.g. Excavation, Plumbing, Electrical)
- City

The following should be possible:

- Search for a company by typing into a search field. The search term gets matched only
  against the company name and the list of companies is filtered based on the search term
  in real time as the user is typing.
- Filter the list using a set of checkboxes to include only those companies which offer a
  particular speciality (e.g. only

## What can be improved

- [x] Debounce the search field so that the request is made only after the user stops typing
- [x] Add a way to reset the unchecked filters
- [x] Make each company name a clickable link that will redirect to a page with company's details
- [x] Create Back-End route to get only the data about a single company
- [x] Implement the searching on the Back-End and only send the query text from the Front-End
- [x] Show the number of displayed results
- [ ] Paginate the results in the Back-End and provide the corresponding functionality in the Front-End
- [ ] Add ways to sort the data based on specific columns
- [ ] Add unit tests
- [ ] Create unit tests with a tool like Testing Library
- [ ] Create end-to-end tests with a tool like Cypress
- [ ] Create a Dockerfile
- [ ] Move the data to a database
- [ ] Improve the content for mobile devices
- [ ] Improve the content from an accesibility point of view (proper outlines, keyboard navigation, alt texts, accesibility attributes, contrasts, etc.)
- [ ] Optimize the code where needed for better performance
- [ ] Add pre-commit/ pre-push hooks for linting and prettier
- [ ] Add prop-types
- [ ] Add a typechecking tool, Typescripts, FlowsJS or at least JSDoc
- [ ] Use ESM in the NodeJS part

## For starting the application open 2 terminals and run these commands(after installing the dependencies):

`npm run dev`
`npm run server`
