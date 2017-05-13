import { createSelector } from 'reselect'

export const resumeIdSelector = createSelector(
	state => state.resume,
	resume => resume ? resume.id : 0
)


// model.fullName = ko.computed(function(){
// 	return model.firstName() + model.lastName()
// })

// react version

// export const fullNameSelector = createSelector(
// 	state => state.firstName,
// 	state => state.lastName,
// 	(firstName, lastName) => firstName + lastName
// )
