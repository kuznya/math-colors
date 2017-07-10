function write(s)   { document.write(s); }
function writeln(s) { document.write(s+'\n'); }

const colors = {  0:'Red', 30:'Orange', 60:'Yellow',
            90:'Grass', 120:'Green', 150:'Spring',
            180:'Cyan', 210:'Azure', 240:'Blue', 
            270:'Violet', 300:'Magenta', 330:'Rose', 360:'Red'};

function _ch(hue,base) {
    let d = Math.abs(base-hue);
    if (d >240) {
        base +=360;
        d = Math.abs(base-hue);
    }

    if (d <=60) return "ff";
    if (d <120) return ("00"+Math.round((120-d)/60*256).toString(16)).slice(-2);
    return "00";
}

function rgb(hue) {
    hue = hue % 360;
    return "#" + _ch(hue, 0) + _ch(hue, 120) + _ch(hue, 240);
}

function drawTable(step) {
    for (let i=0; i<=360; i+=step) {
        const c = rgb(i);
        const name = colors[i] || '';
        write('<div style="background:' + c + ';">'+ i + ' : ' + c + (name? (' - ' + name) : '') + '</div>');
    }
}
