import React, { useState } from "react";

function App() {
  const initialLessons = [
    {
      id: 1,
      title: "Introduction",
      description: "Overview of the React course",
      duration: "30 mins",
      completed: false
    },
    {
      id: 2,
      title: "Basics",
      description: "Learn React fundamentals",
      duration: "2 hours",
      completed: false
    },
    {
      id: 3,
      title: "Advanced",
      description: "Advanced React concepts",
      duration: "3 hours",
      completed: false
    },
    {
      id: 4,
      title: "Summary",
      description: "Course recap and conclusion",
      duration: "30 mins",
      completed: false
    }
  ];

  const [lessons, setLessons] = useState(initialLessons);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const markCompleted = () => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === selectedLesson.id
          ? { ...lesson, completed: true }
          : lesson
      )
    );
    setSelectedLesson({ ...selectedLesson, completed: true });
  };

  const completedCount = lessons.filter(l => l.completed).length;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <h1 style={styles.title}>📘 React LMS</h1>
        <p style={styles.subtitle}>
          Learn React from basics to advanced
        </p>

        {/* Course Info */}
        <div style={styles.infoBox}>
          <span>⏱ Duration: <b>6 Hours</b></span>
          <span>📚 Lessons: <b>{lessons.length}</b></span>
          <span>✅ Completed: <b>{completedCount}</b></span>
        </div>

        {/* Lesson List */}
        <h3 style={styles.sectionTitle}>Lessons</h3>

        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => setSelectedLesson(lesson)}
            style={{
              ...styles.lessonItem,
              backgroundColor:
                selectedLesson?.id === lesson.id ? "#e3f2fd" : "#ffffff",
              borderLeft:
                lesson.completed
                  ? "6px solid #2e7d32"
                  : "6px solid #1976d2"
            }}
          >
            <span>{lesson.title}</span>
            {lesson.completed && (
              <span style={styles.completed}>✔</span>
            )}
          </div>
        ))}

        {/* Lesson Details */}
        {selectedLesson && (
          <div style={styles.details}>
            <h3 style={{ marginBottom: "8px" }}>
              {selectedLesson.title}
            </h3>
            <p style={styles.detailText}>
              {selectedLesson.description}
            </p>
            <p style={styles.detailText}>
              <b>Duration:</b> {selectedLesson.duration}
            </p>

            {!selectedLesson.completed ? (
              <button style={styles.button} onClick={markCompleted}>
                Mark as Completed
              </button>
            ) : (
              <p style={styles.doneText}>🎉 Lesson Completed</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    width: "460px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
  },
  title: {
    textAlign: "center",
    marginBottom: "5px"
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: "20px"
  },
  infoBox: {
    display: "flex",
    justifyContent: "space-between",
    background: "#f5f7fa",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "20px"
  },
  sectionTitle: {
    marginBottom: "10px"
  },
  lessonItem: {
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.2s ease"
  },
  completed: {
    color: "#2e7d32",
    fontWeight: "bold"
  },
  details: {
    marginTop: "20px",
    padding: "15px",
    background: "#f9fafb",
    borderRadius: "10px",
    border: "1px solid #ddd"
  },
  detailText: {
    marginBottom: "6px"
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px"
  },
  doneText: {
    marginTop: "10px",
    color: "#2e7d32",
    fontWeight: "bold"
  }
};

export default App;
