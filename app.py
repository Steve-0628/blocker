import flask
from requests_oauthlib import OAuth1Session
from urllib.parse import parse_qsl
from datetime import datetime
import flask_cors
import os

app = flask.Flask(__name__)
flask_cors.CORS(app)

CK = os.environ.get("CK")
CS = os.environ.get("CS")
## 2witter Web App

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route("/assets/<path:path>")
def send_assets(path):
    return flask.send_from_directory("assets", path)

@app.route('/login')
def login():
    # do some oauth stuff
    callback = "http://localhost:5000/oauth/"
    if os.environ.get("PORT"):
        callback = "https://blocker.hmpf.club/oauth/"
    if "hisubway" in flask.request.args:
        callback = "http://bb.hisubway.online/oauth/subway/"
    elif "blocklist" in flask.request.args:
        callback = "https://hisubway.hmpf.club/oauth/blocklist/"
    
    oauth = OAuth1Session(CK, CS, callback_uri=callback)
    url = "https://api.twitter.com/oauth/request_token"
    req = oauth.fetch_request_token(url)
    url = "https://api.twitter.com/oauth/authorize?oauth_token=" + \
        req.get('oauth_token')
    return flask.redirect(url)

@app.route("/oauth/")
def oauth():
    oauthtoken = flask.request.args['oauth_token']
    oauthverifier = flask.request.args['oauth_verifier']
    twitter = OAuth1Session(CK, CS, oauthtoken, oauthverifier)
    t = twitter.post("https://api.twitter.com/oauth/access_token",
                     params={'oauth_verifier': oauthverifier,  "oauth_token": oauthtoken})
    access_token = dict(parse_qsl(t.content.decode("utf-8")))
    res = flask.redirect("/")
    max_age = 60 * 60 * 24 * 120  # 120 days
    expires = int(datetime.now().timestamp()) + max_age
    res.set_cookie(
        'access_token', access_token["oauth_token"], max_age=max_age, expires=expires)
    res.set_cookie('access_token_secret',
                   access_token["oauth_token_secret"], max_age=max_age, expires=expires)
    return res

@app.route("/oauth/subway/")
def hisubway():
    oauthtoken = flask.request.args['oauth_token']
    oauthverifier = flask.request.args['oauth_verifier']
    twitter = OAuth1Session(CK, CS, oauthtoken, oauthverifier)
    t = twitter.post("https://api.twitter.com/oauth/access_token",
                     params={'oauth_verifier': oauthverifier,  "oauth_token": oauthtoken})
    access_token = dict(parse_qsl(t.content.decode("utf-8")))
    res = flask.redirect("/redir/")
    max_age = 60 * 60 * 24 * 120  # 120 days
    expires = int(datetime.now().timestamp()) + max_age
    res.set_cookie(
        'access_token', access_token["oauth_token"], max_age=max_age, expires=expires, domain=".hisubway.online")
    res.set_cookie('access_token_secret',
                   access_token["oauth_token_secret"], max_age=max_age, expires=expires, domain=".hisubway.online")
    return res

@app.route("/oauth/blocklist/")
def oauth_blocklist():
    oauthtoken = flask.request.args['oauth_token']
    oauthverifier = flask.request.args['oauth_verifier']
    twitter = OAuth1Session(CK, CS, oauthtoken, oauthverifier)
    t = twitter.post("https://api.twitter.com/oauth/access_token",
                     params={'oauth_verifier': oauthverifier,  "oauth_token": oauthtoken})
    access_token = dict(parse_qsl(t.content.decode("utf-8")))
    res = flask.redirect("/blocklist/")
    max_age = 60 * 60 * 24 * 120  # 120 days
    expires = int(datetime.now().timestamp()) + max_age
    res.set_cookie(
        'access_token', access_token["oauth_token"], max_age=max_age, expires=expires, domain=".hmpf.club")
    res.set_cookie('access_token_secret',
                   access_token["oauth_token_secret"], max_age=max_age, expires=expires, domain=".hmpf.club")
    return res

@app.route("/blocklist/")
def blocklist():
    return flask.redirect("http://blocklist.hmpf.club/")

@app.route("/redir/")
def redir():
    return flask.redirect("https://hisubway.online/bulkblock")

@app.route("/search", methods=["GET"])
def search():
    oauth = OAuth1Session(
        CK, CS, flask.request.args['access_token'], flask.request.args['access_token_secret'])
    url = "https://api.twitter.com/1.1/search/tweets.json"
    if "q" not in flask.request.args:
        return {}
    params = {
        "q": flask.request.args["q"],
        "count": "200"
    }
    req = oauth.get(url, params=params)
    return req.json()

@app.route("/following", methods=["GET"])
def following():
    oauth = OAuth1Session(
        CK, CS, flask.request.args['access_token'], flask.request.args['access_token_secret'])
    url = "https://api.twitter.com/1.1/friends/ids.json"
    params = {
        "count": "5000",
        "stringify_ids": True
    }
    req = oauth.get(url, params=params)
    return req.json()

@app.route("/block", methods=["POST"])
def block():
    oauth = OAuth1Session(
        CK, CS, flask.request.args['access_token'], flask.request.args['access_token_secret'])
    url = "https://api.twitter.com/1.1/blocks/create.json"
    params = {}
    if "screen_name" in flask.request.args:
        params = {
            "screen_name": flask.request.args['screen_name']
        }
    elif "id" in flask.request.args:
        params = {
            "user_id": flask.request.args['id']
        }
    else:
        return {}
    req = oauth.post(url, params=params)
    return req.json()

@app.route("/user", methods=["GET"])
def user():
    oauth = OAuth1Session(
        CK, CS, flask.request.args['access_token'], flask.request.args['access_token_secret'])
    url = "https://api.twitter.com/1.1/users/show.json"
    params = {}
    if "screen_name" in flask.request.args:
        params = {
            "screen_name": flask.request.args['screen_name']
        }
    elif "id" in flask.request.args:
        params = {
            "user_id": flask.request.args['id']
        }
    else:
        return {}

    req = oauth.get(url, params=params)
    return req.json()

if __name__ == '__main__':
    app.run(debug=bool(os.environ.get("PORT", True)), host="0.0.0.0", port=os.environ.get("PORT", 5000))
