// Wherein the index of the array corresponds with the numerical score of the response
const RESPONSES = [
  'NOT AT ALL',
  'SEVERAL DAYS',
  'MORE THAN HALF THE DAYS',
  'NEARLY EVERY DAY',
];

const PROMPTS = [
  'Little interest or pleasure in doing things?',
  'Feeling down, depressed, or hopeless?',
  'Trouble falling or staying asleep, or sleeping too much?',
  'Feeling tired or having little energy?',
  'Poor appetite or overeating?',
  'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
  'Trouble concentrating on things, such as reading the newspaper or watching television?',
  `Moving or speaking so slowly that other people could have noticed?
   Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?`,
  'Thoughts that you would be better off dead, or of hurting yourself in some way?',
];

const PROFESSIONALS = [
  'Dr. Smith',
  'Dr. Jane',
  'Dr. Grant',
];

export default {
  PROMPTS,
  RESPONSES,
  PROFESSIONALS,
};
