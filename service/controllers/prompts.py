
from dataclasses import dataclass
from flask import Blueprint, request
prompt_bp = Blueprint('prompt', __name__)

@dataclass
class Prompt:
    id: int
    subject: str
    tags: list
    text:str
    author: str
    date: str
    response: str
    tryit_link: str
    category: str


@prompt_bp.route('/prompts', methods=['GET'])
def get_prompts() -> list:
    # Get the 'nextlink' query parameter
    nextlink = request.args.get('nextlink')
    if nextlink is None:
        nextlink = 1
    response = {
        'prompts': list(map(lambda prompt: prompt.__dict__, [
            Prompt(1, 'Math', ['algebra', 'geometry'], 'What is 1 + 1?', 'John Doe', '2021-01-01', '2', 'https://tryit.com/1', 'question'),
            Prompt(2, 'Science', ['biology', 'chemistry'], 'What is the powerhouse of the cell?', 'Jane Doe', '2021-01-01', 'Mitochondria', 'https://tryit.com/2', 'question'),
            Prompt(3, 'English', ['literature', 'grammar'], 'What is the past tense of the verb "to be"?', 'John Doe', '2021-01-01', 'was', 'https://tryit.com/3', 'question'),
            Prompt(4, 'Math', ['algebra', 'geometry'], 'What is 1 + 1?', 'John Doe', '2021-01-01', '2', 'https://tryit.com/1', 'question'),
            Prompt(5, 'Science', ['biology', 'chemistry'], 'What is the powerhouse of the cell?', 'Jane Doe', '2021-01-01', 'Mitochondria', 'https://tryit.com/2', 'question'),
            Prompt(6, 'English', ['literature', 'grammar'], 'What is the past tense of the verb "to be"?', 'John Doe', '2021-01-01', 'was', 'https://tryit.com/3', 'question'),
            Prompt(7, 'Math', ['algebra', 'geometry'], 'What is 1 + 1?', 'John Doe', '2021-01-01', '2', 'https://tryit.com/1', 'question'),
            Prompt(8, 'Science', ['biology', 'chemistry'], 'What is the powerhouse of the cell?', 'Jane Doe', '2021-01-01', 'Mitochondria', 'https://tryit.com/2', 'question'),
            Prompt(9, 'English', ['literature', 'grammar'], 'What is the past tense of the verb "to be"?', 'John Doe', '2021-01-01', 'was', 'https://tryit.com/3', 'question'),
            Prompt(10, 'Math', ['algebra', 'geometry'], 'What is 1 + 1?', 'John Doe', '2021-01-01', '2', 'https://tryit.com/1', 'question')])),
        'nextlink': nextlink
    }
    return response