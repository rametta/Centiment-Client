import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Chart from '../chart';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var data = [{title:'URL Avatar',subtitle:'Subtitle',url:'http://www.wsj.com',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.', img:'http://www.alicepasquini.com/wp-content/uploads/2014/08/The-Wall-Street-Journal-Logo.jpg'},
			{title:'URL Avatar',subtitle:'Subtitle',url:'http://www.economist.com',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'The Economist offers authoritative insight and opinion on international news, politics, business, finance, science, technology and the connections between them.', img:'http://esnupf.org/sites/default/files/partners/images/economist_logo.gif'},
			{title:'URL Avatar',subtitle:'Subtitle',url:'http://www.finra.org',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'FINRA provides tools, templates, and other resources for firms with 150 or fewer registered representatives.', img:'http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/08/18/101927260-AP562489808709.1910x1000.jpg'},
			{title:'URL Avatar',subtitle:'Subtitle',url:'http://www.nasdaq.com',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'The Nasdaq Stock Market website, featuring stock quotes, analysis, financials, company news, market information as well as investing tools and guides.', img:'http://www.businessrockstars.com/wp-content/uploads/2016/06/Nasdaq.png'},
			{title:'URL Avatar',subtitle:'Subtitle',url:'http://www.investopedia.com',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'Investopedia is the world\'s leading source of financial content on the web, ranging from market news to retirement strategies, investing education to insights from advisors.',img:'https://sr-careersite-image-prod.s3.amazonaws.com/55bfd468e4b0261373b72664/43ea7f64-91e4-45b4-a628-3fdc502f84e5'}];

export default class ReferencePage extends Component {
	
	rendercards(){
		return data.map((data, i) => {
			return (
				<a href = {data.url}>
					<div>
						<Card key={i}>
						    <CardHeader
						      title={data.title}
						      subtitle= {data.subtitle}
						      avatar= {data.img} />
						    <CardMedia
						      overlay={<CardTitle title={data.overlaytitle} subtitle={data.overlaysubtitle} />}
						    >
						    <img src={data.img}/>
						    </CardMedia>
						    <CardTitle title={data.cardtitle} subtitle={data.subtitle} />
						    <CardText>
						      {data.cardtext}
						    </CardText>
						    <CardActions>
						    	<FlatButton label= {data.buttonlabel} />
						    </CardActions>
						</Card>
					</div>
				</a>
			);
		});
	}

	render() {
		return (
			<DocumentTitle title="References">
				<div><h1>References Page</h1>
					{this.rendercards()}
				</div>
			</DocumentTitle>
		);
	}
}