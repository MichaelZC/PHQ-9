export default (score) => {
  if (score < 4) {
    return 'None';
  }
  if (score < 9) {
    return 'Mild';
  }
  if (score < 14) {
    return 'Moderate';
  }
  if (score < 19) {
    return 'Moderately Severe';
  }
  return 'Severe';
};
