function getListHtml(array) {
    var html = '<ul>';

    for (let i = 0; i < array.length; i++) {
        html += '<li>' + html + '</li>';
    }
    html += '</ul>'

    return html;
}

var cars = ['BMW', 'Ford', 'Lambo', 'Hyundai'];

