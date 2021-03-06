module.exports = {
  Video: {
    id: 'Video',
    required: ['id', 'title', 'url'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the video',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the video'
      },
      description: {
        type: 'string',
        description: 'Description of the video'
      },
      thumbnail: {
        type: 'string',
        description: 'Image URL of the video'
      },
      url: {
        type: 'string',
        description: 'URL of the video'
      },
      problemId: {
        type: 'integer',
        format: 'int64',
        description: 'Id of the associated problem',
        minimum: '0'
      },
      isWatched: {
        type: 'boolean',
        description: 'If this videos has already been watched by the logged in user?'
      }
    }
  },
  Topic: {
    id: 'Topic',
    required: ['id', 'title'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the Topic',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the Topic'
      },
      description: {
        type: 'string',
        description: 'Description of the Topic'
      }      
    }
  },
  Topics: {
    id: 'Topics',
    required: ['id', 'title'],
    type: 'array',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the topic',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the topic'
      },
      description: {
        type: 'string',
        description: 'Description of the topic'
      }
    }
  },
  Problems: {
    id: 'Problem',
    required: ['id', 'title'],
    type: 'array',
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the problem',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the problem'
      },
      description: {
        type: 'string',
        description: 'Description of the problem'
      },
      solved:{
        type: 'boolean',
        description: 'Was solved by user'
      }
    }
  },
  Problem: {
    id: 'Problem',
    required: ['id', 'title', 'questions'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the problem',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the problem'
      },
      description: {
        type: 'string',
        description: 'Description of the problem'
      },
      questions: {
        type: 'array',
        items: {
          $ref: 'Question'
        },
        description: 'Questions available for the problem'
      }
    },
    solved:{
      type: 'boolean',
      description: 'Was solved by user'
    }
  },
  Question: {
    id: 'Question',
    required: ['id', 'title', 'options'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the question',
        minimum: '0'
      },
      title: {
        type: 'string',
        description: 'Friendly name of the question'
      },
      options: {
        type: 'array',
        items: {
          $ref: 'Option'
        },
        uniqueItems: true,
        description: 'Options available for the question'
      },
      answered: {
        type: 'integer',
        format: 'int64',
        description: 'ID of the option answered by the logged in user'
      },
      isCorrect: {
        type: 'boolean',
        description: 'Is the answer provided by the user is correct or not?'
      }
    }
  },
  Option: {
    id: 'Option',
    required: ['id', 'value'],
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier for the option',
        minimum: '0'
      },
      value: {
        type: 'string',
        description: 'content of the option'
      }
    }
  },
  QuestionDefinition: {
    id: "QuestionDefinition",
    required: ["validAnswer", "options", "title"],
    properties: {
      options: {
        type: "array",
        items: {
          type: "string"
        },
        uniqueItems: true,
        description: "Options available for the question"
      },
      title: {
        type: "string",
        description: "Friendly name of the question"
      },
      validAnswer: {
        type: "string",
        description: "valid answer"
      }
    }
  },
  Answer: {
    id: 'Answer',
    required: ['isCorrect'],
    properties: {
      isCorrect: {
        type: 'boolean',
        description: 'If the answer posted was correct or not?'
      }
    }
  },
  AnswerPayload: {
    id: 'Answer',
    required: ['answer'],
    properties: {
      problemId: {
        type: 'integer',
        format: 'int64',
        description: 'ID of the problem to answer'
      },
      questionId: {
        type: 'integer',
        format: 'int64',
        description: 'ID of the question to answer'
      },
      answer: {
        type: 'integer',
        description: 'ID of the option that needs to be matched'
      }
    }
  },
  Counts: {
    id: 'Counts',
    required: ['videosCount', 'problemsCount', 'unsolvedCount', 'solvedCount'],
    properties: {
      videosCount: {
        type: 'integer',
        format: 'int64',
        description: 'Number of total videos available'
      },
      problemsCount: {
        type: 'integer',
        format: 'int64',
        description: 'Number of total problems available'
      },
      unsolvedCount: {
        type: 'integer',
        format: 'int64',
        description: 'Number of unsolved problems'
      },
      solvedCount: {
        type: 'integer',
        format: 'int64',
        description: 'Number of solved problems'
      }
    }
  }
};
