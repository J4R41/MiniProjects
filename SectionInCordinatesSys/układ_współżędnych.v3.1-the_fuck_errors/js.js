let prjct1 = [];

function new_prjct()
{
	if(prjct1[prjct1.length-1] == '<textarea id="project" placeholder="Type project name" onchange="new_prjct_b()"></textarea>')
	{
		alert('Type name of project');
	}
	else if(prjct1.length >= 9 )
	{
		alert('To many projects');
	}
	else
	{
		prjct1.push('<textarea id="project" placeholder="Type project name" onchange="new_prjct_b()"></textarea>');
		document.getElementById('projects').innerHTML += prjct1.join('');
	}
}
function new_prjct_b()
{
	let name = document.getElementById('project').value;

	prjct1[prjct1.length-1] = '<button class="color" id="projectb" onclick="">' + name + '</button>';
	document.getElementById('projects').innerHTML += prjct1.join('');
}