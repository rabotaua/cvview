import { createSelector } from 'reselect'

export const isResumeLoadedSelector = createSelector(
	state => state.resume,
	resume => !!Object.keys(resume).length
)
