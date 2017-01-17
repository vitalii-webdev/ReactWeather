
	var React = require('react');
	var {Link} = require('react-router');

	var Example = (props) => {
		return (
			<div>
				<h1 className="text-center"> Examples </h1>
				<p> Here are few example locations to try out! </p>
				<ol>
					<li>
						<Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
					</li>
					<li>
						<Link to='/?location=Rio'>Rio, Brazil</Link>
					</li>
				</ol>
			</div>
		);
	}

	module.exports = Example;