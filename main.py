from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/index.html')
@app.route('/')
def index():
    return render_template("index.html"), 200


@app.route('/contact.html')
def contact():
    return render_template("contact.html"), 200


@app.route('/link1.html')
def link1():
    return render_template("link1.html"), 200


@app.route('/link2.html')
def link2():
    return render_template("link2.html"), 200


@app.route('/link3.html')
def link3():
    return render_template("link3.html"), 200


@app.route('/donate.html')
def donate():
    return render_template("donate.html"), 200


@app.route('/link4.html')
def link4():
    return render_template("link4.html"), 200


if __name__ == '__main__':
    app.run(debug=True)
