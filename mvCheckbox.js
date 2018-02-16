/**
 * mvCheckbox
 * custom checkboxes tiny javascript library
 * @author mazurinv@gmail.com
 * web page: http://mazurinv.ru
 * Copyright 2018 Vladimir Mazourin
 */

var mvCheckbox = function (params) {
    this.params = Object.create(mvCheckbox.prototype.defaultParams);
    this.properties = Object.create(mvCheckbox.prototype.properties);
    for (var key in params) {
        this.params[key] = params[key];
    }
    this.draw()
};
mvCheckbox.prototype.properties = {
    ctx: undefined,
    canvasWidth: 0,
    canvasHeight: 0
};
mvCheckbox.prototype.defaultParams = {
    cssClass: 'mvCheckbox',
    width: 20,
    height: 20,
    radius: 0,
    innerRadius: 0,
    padding: 2,
    defaultColor: "#fca",
    selectedColor: "#fff",
    background: "#003951",
    clicked: function (el, that) {
    }
};
mvCheckbox.prototype.roundRect = function (color, x, y, w, h, r) {
    var ctx = this.properties.ctx
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y,   x+w, y+h, r);
    ctx.arcTo(x+w, y+h, x,   y+h, r);
    ctx.arcTo(x,   y+h, x,   y,   r);
    ctx.arcTo(x,   y,   x+w, y,   r);
    ctx.closePath();
    return ctx;
};
mvCheckbox.prototype.draw = function() {
    var elements = document.getElementsByClassName(this.params.cssClass);
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i]
        el.id = this.params.cssClass + "_" + i
        var attribute = el.getAttribute("data-selected");
        if (attribute !== "true") {
            el.setAttribute("data-selected", "false");
        }
        this.drawElement(el)

        var that = this;
        el.onclick = function () {
            var attribute = this.getAttribute("data-selected");
            if (attribute === "true") {
                this.setAttribute("data-selected", "false")
            } else {
                this.setAttribute("data-selected", "true")
            }
            that.drawElement(this);
            that.params.clicked(el, that)
        };
    }
};
mvCheckbox.prototype.drawElement = function(el) {
    el.innerHTML = "<canvas id='"+el.id+"_canvas'></canvas>";
    this.properties.ctx = document.getElementById(el.id+"_canvas").getContext('2d');
    this.properties.canvasWidth = this.params.width;
    this.properties.canvasHeight = this.params.height;
    document.getElementById(el.id+'_canvas').setAttribute("width", this.properties.canvasWidth);
    document.getElementById(el.id+'_canvas').setAttribute("height", this.properties.canvasHeight);
    document.getElementById(el.id).style.position = "relative";

    this.roundRect(
        this.params.background,
        0,
        0,
        this.params.width,
        this.params.height,
        this.params.radius
    ).fill()

    var attribute = el.getAttribute("data-selected");
    if (attribute === "false") {
        this.roundRect(
            this.params.defaultColor,
            this.params.padding,
            this.params.padding,
            this.params.width - 2 * this.params.padding,
            this.params.height - 2 * this.params.padding,
            this.params.innerRadius
        ).fill()
        return;
    }

    this.roundRect(
        this.params.selectedColor,
        this.params.padding,
        this.params.padding,
        this.params.width - 2 * this.params.padding,
        this.params.height - 2 * this.params.padding,
        this.params.innerRadius
    ).fill()
};