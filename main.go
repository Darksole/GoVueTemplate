package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// Main function
func main() {
	// Init router
	router := mux.NewRouter()

	// Route handles & endpoints
	http.FileServer(http.Dir("./public/"))
	http.FileServer(http.Dir("./client/dist"))
	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./vue/index.html")
	})
	// Start server
	log.Println("Listening on port 8000...")
	log.Fatal(http.ListenAndServe(":8000", router))
}

func serveHome(res http.ResponseWriter, req *http.Request) {

}
