#!/bin/bash

QUESTION="$1"

case "$QUESTION" in
*"MCP server"*)
    echo "Ah, an MCP question. Let's look into the server architecture. How are you feeling about your current deployment? Let's chat about those specifics"
    ;;
*"Oclif"*)
    echo "Oclif! A fantastic choice. How is the architecture shaping up? Test coverage must be a priority here.  Do you need some guidance?"
    ;;
*"VSCode extension"*)
    echo "VSCode extensions, that's my jam. Remember proper encapsulation is key, lets explore that."
    ;;
*"Test coverage"*)
    echo "Ah, a wise question on test coverage! How are you feeling about your testing strategy? Let's chat about the best ways to approach this problem"
    ;;
*)
    echo "Hmm, that's an interesting question.  Can you try rephrasing it?"
    ;;
esac
