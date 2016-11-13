import React from 'react';
import DocumentTitle from 'react-document-title';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ReferencePage = () => {
		return (
			<DocumentTitle title="References">
				<div className="container">
					<div className="row">

						<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="https://pbs.twimg.com/profile_images/685113343204585473/jV72Zljq.jpg" />
									<CardMedia>
										<img className="imgRef" src="https://connorbuilding.com/wp-content/uploads/2016/03/wallstreetjournal.png"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="The Economist"
										avatar="http://esnupf.org/sites/default/files/partners/images/economist_logo.gif" />
									<CardMedia>
										<img className="imgRef" src="http://esnupf.org/sites/default/files/partners/images/economist_logo.gif"/>
									</CardMedia>
									<CardText>
										The Economist offers authoritative insight and opinion on international news, politics, business, finance, science, technology and the connections between them.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.economist.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="Finra"
										avatar="https://pbs.twimg.com/profile_images/469477094947168256/KmhmBH1J_400x400.jpeg" />
									<CardMedia>
										<img className="imgRef" src="http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/08/18/101927260-AP562489808709.1910x1000.jpg"/>
									</CardMedia>
									<CardText>
										FINRA provides tools, templates, and other resources for firms with 150 or fewer registered representatives.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.finra.org" />
									</CardActions>
							</Card>
						</div>

					</div>
					<div className="row">
					
						<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="NASDAQ"
										avatar="http://www.nasdaq.com/images/Ndotcom_microsite_299x188.jpg" />
									<CardMedia>
										<img className="imgRef" src="http://www.businessrockstars.com/wp-content/uploads/2016/06/Nasdaq.png"/>
									</CardMedia>
									<CardText>
										The Nasdaq Stock Market website, featuring stock quotes, analysis, financials, company news, market information as well as investing tools and guides.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.nasdaq.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="Investopedia"
										avatar="https://pbs.twimg.com/profile_images/1891984499/Investopedia_I_400x400.jpg" />
									<CardMedia>
										<img className="imgRef" src="https://sr-careersite-image-prod.s3.amazonaws.com/55bfd468e4b0261373b72664/43ea7f64-91e4-45b4-a628-3fdc502f84e5"/>
									</CardMedia>
									<CardText>
										Investopedia is the world's leading source of financial content on the web, ranging from market news to retirement strategies, investing education to insights from advisors.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.investopedia.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="Alteryx"
										avatar="http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/102013/alteryx_0.png?itok=np3lcfE7" />
									<CardMedia>
										<img className="imgRef" src="http://i.imgur.com/9jLXC23.jpg"/>
									</CardMedia>
									<CardText>
										Self-Service Data Analytics. Repeatable workflow for self-service BI, data preparation, data blending, and advanced analytics. Deeper insights in hours, not weeks.									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.alteryx.com" />
									</CardActions>
							</Card>
						</div>

					</div>
					<div className="row">
					
					<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="Intuit"
										avatar="https://www.drupal.org/files/project-images/Intuit_Profile_Image.jpg" />
									<CardMedia>
										<img className="imgRef" src="http://www.intuit.com/showroom_cms/image/content/dam/intuit/intuitcom/about_intuit_com/images/intuit_blue.gif"/>
									</CardMedia>
									<CardText>
										Start your small business with QuickBooks accounting and financial software from Intuit. Tackle tax, budgets and personal finance with TurboTax, Quicken and Mint.									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.intuit.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="SEC EDGAR Search Tool"
										avatar="http://img.deusm.com/informationweek/2014/06/1278868/sec_us-securities-and-exchange-commission.png" />
									<CardMedia>
										<img className="imgRef" src="http://www.aaii.com/files/images/articles/9118-fig1.jpg"/>
									</CardMedia>
									<CardText>
										Since 1934, the SEC has required disclosure in forms and documents. In 1984, EDGAR began collecting electronic documents to help investors get information. The SEC's new system requires data disclosure — the next step to improve how investors find and use information.									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.sec.gov/edgar/searchedgar/webusers.htm" />
									</CardActions>
							</Card>
						</div>

						<div className="col-sm-4 card">
							<Card>
									<CardHeader
										title="1&1"
										avatar="https://www.1and1.com/logo.png" />
									<CardMedia>
										<img className="imgRef" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1%261_logo.svg/1124px-1%261_logo.svg.png"/>
									</CardMedia>
									<CardText>
										As one of the World's leading Web Hosting Companies, 1and1 ensures a top-notch Hosting Experience, for Domains, Websites, Servers, Mail and Eshops. Start hosting now!									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.1and1.com" />
									</CardActions>
							</Card>
						</div>

					</div>
				</div>
			</DocumentTitle>
		);

}

module.exports = ReferencePage;