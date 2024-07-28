package main

import (
	"fmt"
	"log"
	"os"
	"strings"
)

func isComment(line string) bool {
	for i2 := 0; i2 < len(line); i2++ {
		if "#" == string(line[i2]) {
			return true
		}
	}
	return false
}

func main() {
	b, err := os.ReadFile("example.cfg")
	if err != nil {
		log.Fatal(err)
	}

	lines := strings.Split(string(b), "\n")
	for i := 0; i < len(lines); i++ {
		line := lines[i]
		if !isComment(line) {
			fmt.Printf("%d %s\n", i, line)
		}
	}
}
