import React from 'react';
import DocumentTitle from 'react-document-title';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var cards = [
	{
		title:'Wall Street Journal',
		subtitle:'Subtitle',
		url:'//www.wsj.com',
		cardtext:'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.', img:'http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg'
	},
	{
		title:'The Economist',
		subtitle:'Subtitle',
		url:'//www.economist.com',
		cardtext:'The Economist offers authoritative insight and opinion on international news, politics, business, finance, science, technology and the connections between them.', img:'http://esnupf.org/sites/default/files/partners/images/economist_logo.gif'
	},
	{
		title:'Finra',
		subtitle:'Subtitle',
		url:'//www.finra.org',
		cardtext:'FINRA provides tools, templates, and other resources for firms with 150 or fewer registered representatives.',img:'http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/08/18/101927260-AP562489808709.1910x1000.jpg'
	},
	{
		title:'NASDAQ',
		subtitle:'Subtitle',
		url:'//www.nasdaq.com',
		cardtext:'The Nasdaq Stock Market website, featuring stock quotes, analysis, financials, company news, market information as well as investing tools and guides.', img:'http://www.businessrockstars.com/wp-content/uploads/2016/06/Nasdaq.png'
	},
	{
		title:'Investopedia',
		subtitle:'Subtitle',
		url:'//www.investopedia.com', 
		cardtext:'Investopedia is the world\'s leading source of financial content on the web, ranging from market news to retirement strategies, investing education to insights from advisors.',img:'https://sr-careersite-image-prod.s3.amazonaws.com/55bfd468e4b0261373b72664/43ea7f64-91e4-45b4-a628-3fdc502f84e5'
	}
];

const ReferencePage = () => {
		return (
			<DocumentTitle title="References">
				<div className="container">
					<div className="row">

						<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

					</div>
					<div className="row">
					
						<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

					</div>
					<div className="row">
					
					<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

						<div className="col-md-4 card">
							<Card>
									<CardHeader
										title="Wall Street Journal"
										avatar="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg" />
									<CardMedia>
										<img src="http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg"/>
									</CardMedia>
									<CardText>
										WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.
									</CardText>
									<CardActions>
										<FlatButton labelStyle={{'color': '#283593' }} label='View More' primary href="//www.wsj.com" />
									</CardActions>
							</Card>
						</div>

					</div>
				</div>
			</DocumentTitle>
		);

}

module.exports = ReferencePage;