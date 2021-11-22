export default {
  registerCoach(state, payload) {
    console.log(payload)
    state.coaches.push(payload);
    console.log(state.coaches)
  },
  setCoaches(state, payload) {
    // console.log(payload)
    state.coaches = payload;
    // console.log(state.coaches)
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};