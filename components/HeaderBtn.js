'use client';

import { FaPhoneAlt } from 'react-icons/fa';

export default function CallButton() {
	return (
		<div className=' py-2 px-3 d-flex justify-content-end'>
			<a
				href='tel:+52 800 8017 795'
				className='btn btn-success d-flex align-items-center fw-bold blinking'
				style={{ borderRadius: '50px', fontSize: '1.1rem' }}>
				<FaPhoneAlt className='me-2' />
				1-800-123-4567
			</a>

			<style jsx>{`
				@keyframes blink {
					0%,
					100% {
						opacity: 1;
					}
					50% {
						opacity: 0.5;
					}
				}

				.blinking {
					animation: blink 1s infinite;
				}
			`}</style>
		</div>
	);
}
