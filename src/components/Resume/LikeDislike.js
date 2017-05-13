import React from 'react'
import authHoc from '../authHoc'


export const LikeDislike = ({likeDislikeResume, resumeId, toggleLikeResumeAction}) => {

	return <div style={{cursor: 'pointer'}} onClick={() => toggleLikeResumeAction(resumeId) }>
		<i className={likeDislikeResume ? 'fi-like' : 'fi-like-transparent'}></i>&nbsp; Добавить в интересные
	</div>
}

export default authHoc(LikeDislike)(null)
