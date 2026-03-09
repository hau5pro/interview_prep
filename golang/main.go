package main

import (
	"fmt"
	"interview_prep/golang/neet150"
	"os"
)


func run() error {
	return neet150.N0()
}

func main() {
	if err := run(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
