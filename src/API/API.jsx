export const BASE_ENDPOINT = 'https://cruel-ronda-stanford-ad22351b.koyeb.app/v1';
export const METRICS_HISTORY_ENDPOINT = (startYear, startMonth, endYear, endMonth) =>
     `${BASE_ENDPOINT}/responses/history/startYear=${startYear}&startMonth=${startMonth}&endYear=${endYear}&endMonth=${endMonth}`;
export const METRICS_ENDPOINT = `${BASE_ENDPOINT}/responses/metrics`;
export const RESPONSES_ENDPOINT = `${BASE_ENDPOINT}/responses`;
export const WASTETYPE_ENDPOINT = `${BASE_ENDPOINT}/waste-type`;
export const LOGIN_ENDPOINT = `${BASE_ENDPOINT}/user/login`;
export const WASTETYPE_WITH_INPUT_ENDPOINT = (itemName) => `${BASE_ENDPOINT}/waste-type/${itemName}`;