import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';

const Contact = () => {
	const { newTheme } = React.useContext(ThemeContext);
	return (
		<footer
			className={styles.footer}
			id='contact'
			// style={{ background: `${newTheme.highlightBackground}` }}
		>
			<div className={styles.container}>
				<h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}
				>
					I'm actively looking for any new opportunities, in
					full-stack web development.
				</p>
				<div
					style={{ color: `${newTheme.title}`, display:"flex", width:"100vw", justifyContent:"space-evenly" }}
					className={styles.contactOptions}
				>
					<a
						href='tel:8976879231'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<div style={{display:"flex", flexDirection:"column"}}>
							+918976879231
						<i className='fas fa-phone-alt' />
						</div>
					</a>
					<a
						href='mailto:shubhamtammewar96@gmail.com'
						aria-label='email'
						target='_blank'
						rel='noreferrer'
					>
							<div style={{display:"flex", flexDirection:"column"}}>
								kanhaiyasuthar0@gmail.com
						<i className='far fa-envelope'></i>
							</div>
					</a>
					{/* <a
						href='/'
						aria-label='Twitter'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a> */}
					<a
						href='https://github.com/kanhaiyasuthar0'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>	<div style={{display:"flex", flexDirection:"column"}}>
							kanhaiyasuthar0
						<i className='fab fa-github' />
					</div>
					</a>

					<a
						href='https://www.linkedin.com/in/kanhaiya-suthar-6b4268170/'
						aria-label='Linkedin'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-linkedin-in' />
					</a>
				</div>
			</div>
			<div
				style={{ background: `${newTheme.line}` }}
				className={styles.line}
			/>
			<div
				style={{ color: `${newTheme.para}` }}
				className={styles.copyright}
			>
				Designed and build by Kanhaiya Suthar, 2022 All rights
				reserved.
			</div>
		</footer>
	);
};

export default Contact;
