package main

import (
	"github.com/julienschmidt/httprouter"
	"html/template"
	"net/http"
)

func main() {
	// Set a new HTTP request multiplexer
	mux := httprouter.New()

	// Listen to root path
	mux.GET("/", index)

	// Listen to CSS assets
	mux.ServeFiles("/css/*filepath", http.Dir("public/css"))

	// Listen to JavaScript assets
	mux.ServeFiles("/js/*filepath", http.Dir("public/js"))

	// Custom 404 page
	mux.NotFound = http.HandlerFunc(notFound)

	// Custom 500 page
	mux.PanicHandler = errorHandler

	// Set the parameters for a HTTP server
	server := http.Server{
		Addr:    "127.0.0.1:8080",
		Handler: mux,
	}

	// Listen requests
	server.ListenAndServe()
}

func index(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	t, err := template.ParseFiles("views/index.html", "views/calculator.html")
	if err != nil {
		http.Error(w, err.Error(), 500)
	}

	t.ExecuteTemplate(w, "layout", "Calculator")
}

func notFound(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("views/index.html", "views/notFound.html")
	if err != nil {
		http.Error(w, err.Error(), 500)
	}

	t.ExecuteTemplate(w, "layout", "Calculator")
}

func errorHandler(w http.ResponseWriter, r *http.Request, p interface{}) {
	t, err := template.ParseFiles("views/index.html", "views/error.html")
	if err != nil {
		http.Error(w, err.Error(), 500)
	}

	t.ExecuteTemplate(w, "layout", "Calculator")
}
