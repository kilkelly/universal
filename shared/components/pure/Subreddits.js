import React from "react"
import moment from "moment"

export default class Subreddits extends React.Component {

	noItems() {
		return <h3>No data</h3>
	}

	fetching() {
		return <h3>Refreshing titles...</h3>
	}	

	items() {
		return(
			<ul>
				{this.props.items.slice(0, 5).map((item, index) =>
					<li key={index}>{item.get("title")}</li>
				)}
			</ul>
		)
	}

	render() {	
		if (this.props.isFetching) {
			this.componentHTML = this.fetching()  
		} else if (!this.props.items) {
			this.componentHTML = this.noItems()  
		} else {
			this.componentHTML = this.items()
		}	

		return(				
		<div>
			Current subreddit is <input id="subreddit" type="text" defaultValue={this.props.selectedSubreddit}/><button onClick={() => this.props.selectSubreddit(document.getElementById("subreddit").value)}>Set</button> Last updated on {moment(this.props.lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss a")} 
			&nbsp;<button onClick={() => this.props.refreshSubreddit(this.props.selectedSubreddit)}>Refresh</button>			
			{this.componentHTML}
		</div>
		)
	}
}