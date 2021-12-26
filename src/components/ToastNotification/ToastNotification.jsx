import React from 'react'
import './ToastNotification.css'

let messages = {
	success: 'Success!',
	warning: 'Warning!',
	notifiaction: 'Notification!',
	error: 'Error!',
}

let backgrounds = {
	success: '#3dbb3d',
	warning: '#ff9d00',
	notifiaction: '#3297da',
	error: '#da3232',
}

const ToastNotification = ({ type, message }) => {
	let toastBackground, toastTitle

	if (type === 'success') {
		toastTitle = messages.success
		toastBackground = backgrounds.success
	} else if (type === 'warning') {
		toastTitle = messages.warning
		toastBackground = backgrounds.warning
	} else if (type === 'notifiaction') {
		toastTitle = messages.notifiaction
		toastBackground = backgrounds.notifiaction
	} else {
		toastTitle = messages.error
		toastBackground = backgrounds.error
	}

	return (
		<div className="notifiaction-toast" style={{ background: toastBackground }}>
			<p>{toastTitle}</p>
			<small>{message}</small>
		</div>
	)
}

export default ToastNotification
