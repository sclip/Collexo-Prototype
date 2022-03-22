package server

import com.mitchellbosecke.pebble.loader.ClasspathLoader
import io.ktor.application.*
import io.ktor.http.content.*
import io.ktor.pebble.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*


fun main() {

	embeddedServer(Netty, port = 8080) {
		install(Pebble) {
			loader(ClasspathLoader().apply {
				prefix = "templates"
			})
		}
		routing {
			static {
				files("static")
			}
			get("/") {
				call.respond(PebbleContent("index.html", emptyMap()))
			}
		}
	}.start(wait = true)
}
