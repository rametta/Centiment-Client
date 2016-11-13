import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Chart from '../chart';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var data = [{title:'URL Avatar',subtitle:'Subtitle',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'Robinhood started with the idea that a technology-driven brokerage could operate with significantly less overhead. We cut out the fat that makes other brokerages costly — hundreds of storefront locations and manual account management.',img:'https://tctechcrunch2011.files.wordpress.com/2013/12/screenshot-2013-12-18-at-5-32-59-am.png?w%5Cu003d738'}, 
			{title:'URL Avatar',subtitle:'Subtitle',overlaytitle:'', overlaysubtitle:'', buttonlabel:'', cardtitle:'', cardsubtitle:'', cardtext:'Investopedia is the world\'s leading source of financial content on the web, ranging from market news to retirement strategies, investing education to insights from advisors.',img:'https://sr-careersite-image-prod.s3.amazonaws.com/55bfd468e4b0261373b72664/43ea7f64-91e4-45b4-a628-3fdc502f84e5'}];

export default class ReferencePage extends Component {
	
	rendercards(){
		return data.map((data, i) => {
			return (
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
			);
		});
	}

	render() {
		return (
			<DocumentTitle title="References">
				<div>References Page
					{this.rendercards()}
				</div>
			</DocumentTitle>
		);
	}
}
