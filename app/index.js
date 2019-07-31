import $ from 'jquery'
import _ from 'lodash';
function component(){
	var element=$('<div></div>')

	/* lodash is required for the next line to work */
	element.html(_.join(['Hi','webpack'],' '))

	return element.get(0);
}

document.body.appendChild(component())