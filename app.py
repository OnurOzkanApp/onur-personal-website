# imports
import sqlite3  # sqlite3 library for accessing our database
from flask import (
    Flask,
    render_template,
    request,
    g,
    session,
    redirect,
    url_for,
    flash,
)

# declaring and assigning our database
DATABASE = "./onurdatabase.db"

# METHOD TAKEN FROM FLASK DOCUMENTATION
# method connects to database
def get_db():
    db = getattr(g, "_database", None)  # gets current database, if exists
    if db is None:
        db = g._database = sqlite3.connect(
            DATABASE
        )  # connects to new database otherwise
    return db


# METHOD TAKEN FROM FLASK DOCUMENTATION
# converts tuples from database to dictionaries for use
def make_dicts(cursor, row):
    return dict((cursor.description[idx][0], value) for idx, value in enumerate(row))


# METHOD TAKEN FROM FLASK DOCUMENTATION
# returns resulting query request(
def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


app = Flask(__name__)  # app being run
app.secret_key = b"onurgolgesansloki"


@app.route("/results", methods=["GET", "POST"])
def search(searched):
    searched = searched.lower()
    results = query_db("SELECT * FROM Pages WHERE pages == ?", [searched], one=False)

    if searched != "":
        for item in results:
            if item[0] == searched:
                return render_template("results.html", results=results)
        flash("No results")
        return render_template("results.html", results=[])


# Home page
@app.route("/", methods=["GET", "POST"])
def index():
    # search function
    if request.method == "POST":
        search_text = request.form["search"]
        return search(search_text)

    return render_template("index.html")


# About
@app.route("/about", methods=["GET", "POST"])
def about():
    # search function
    if request.method == "POST":
        search_text = request.form["search"]
        return search(search_text)

    return render_template("about.html")


# Projects
@app.route("/projects", methods=["GET", "POST"])
def projects():
    # search function
    if request.method == "POST":
        search_text = request.form["search"]
        return search(search_text)

    return render_template("projects.html")


# Classes
@app.route("/classes", methods=["GET", "POST"])
def classes():
    # search function
    if request.method == "POST":
        search_text = request.form["search"]
        return search(search_text)

    return render_template("classes.html")


# Links
@app.route("/links", methods=["GET", "POST"])
def links():
    # contact
    if request.method == "POST":
        # search_text = request.form["search"]

        first_name = request.form["firstname"]
        last_name = request.form["lastname"]
        email = request.form["email"]
        form_subject = request.form["subject"]
        email_content = request.form["emailcontent"]

        sq1 = """
            SELECT *
            FROM Emails
            """
        results = query_db(sq1, args=(), one=False)

        cur_id = 0

        for result in results:
            if cur_id < result[0] or result[0] is None:
                cur_id = cur_id
            else:
                cur_id = result[0] + 1

        cur = get_db()
        cur.execute(
            """
            INSERT INTO Emails
            (id, FirstName, LastName, Email, Subject, Content)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (cur_id, first_name, last_name, email, form_subject, email_content),
        )
        cur.commit()
        return redirect(url_for("thankyou"))

    return render_template("links.html")


# Thank You for Contracting Page
@app.route("/thankyou", methods=["GET"])
def thankyou():
    return render_template("thankyou.html")


if __name__ == "__main__":
    #app.run(host="0.0.0.0", port=8080)
    app.run(debug=True)
