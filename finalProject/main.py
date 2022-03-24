from flask import Flask,render_template,request,Response,url_for

app = Flask(__name__)


@app.route("/")
def index():
   return render_template('homePage.html')


@app.route("/pizzas")
def pizzas():
   return render_template('pizza.html')


@app.route("/pasta")
def pasta():
   return render_template('pasta.html')


@app.route("/salads")
def salads():
   return render_template('salad.html')


@app.route("/starters")
def starters():
   return render_template('starters.html')


@app.route("/drinks")
def drinks():
   return render_template('drink.html')

@app.route("/others")
def others():
   return render_template('others.html')



if __name__ == "__main__":
   app.run( debug=True ,port=5000)