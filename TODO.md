# TODO: Redirect to Specialization Card After Application Submission

## Tasks
- [x] Update handleFormSuccess in ApplicationForm.tsx to redirect to /specializations with 'applied' query parameter
- [x] Verify that Specializations.tsx handles the query parameter and scrolls to the card (already implemented)
- [ ] Test the redirection flow after implementation

## Notes
- The Specializations page already has logic to scroll to the specific card when 'applied' query param is present.
- Ensure the redirection maintains a smooth user experience.
