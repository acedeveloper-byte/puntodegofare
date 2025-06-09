import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<>
			<footer>
				<div
					id='contact'
					className='footer'>
					<div className='container'>
						<div className='row pdn-top-30'>
							<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
								<ul className='location_icon'>
									<li>
										<a href='#'>
											<img src='icon/facebook.png' />
										</a>
									</li>
									<li>
										<a href='#'>
											<img src='icon/Twitter.png' />
										</a>
									</li>
									<li>
										<a href='#'>
											<img src='icon/linkedin.png' />
										</a>
									</li>
									<li>
										<a href='#'>
											<img src='icon/instagram.png' />
										</a>
									</li>
								</ul>
							</div>
							<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
								<div className='Follow'>
									<h3>Contacta con nosotros</h3>
									<span>
										<span>
											Registered Agents Inc <br />
											30 N Gould St Ste R,
											<br />
											Sheridan, WY 82801
											<br />
										</span>
										<br />
										<a href='tel:++52 800 8017 795'>+52 800 8017 795</a>
									</span>
								</div>
							</div>
							<div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
								<div className='Follow'>
									<h3>ENLACES ADICIONALES</h3>
									<ul className='link'>
										<li>
											<Link href='/about'>Sobre nosotros</Link>
										</li>
										<li>
											<Link href='/terms'>Términos y condiciones</Link>
										</li>
										<li>
											<Link href='/privacy'> Política de privacidad</Link>
										</li>

										<li>
											<Link href='/contact'> Contacta con nosotros</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
								<div className='Follow'>
									<h3>Contacto</h3>
									<div className='row'>
										<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
											<input
												className='Newsletter'
												placeholder='Name'
												type='text'
											/>
										</div>
										<div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
											<input
												className='Newsletter'
												placeholder='Email'
												type='text'
											/>
										</div>
										<div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
											<textarea
												className='textarea'
												placeholder='comment'
												type='text'
												defaultValue={'Comment'}
											/>
										</div>
									</div>
									<button className='Subscribe'>Submit</button>
								</div>
							</div>
						</div>
						<div className='copyright'>
							<div className='container'>
								<p>
									Copyright 2025 Todos los derechos reservados por
									<a href='#'> Puntodegofare</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
