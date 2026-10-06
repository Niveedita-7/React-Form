import { useState } from "react";
import "./App.css";

function App() {

    // State for the form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="app">

            <h1 className="main-title">
                PIXEL PROFILE
            </h1>

            <div className="form-container">

                {/* ========================= */}
                {/* FORM */}
                {/* ========================= */}

                <div className="form-card">

                    <div className="card-header">
                        ★ ENTER YOUR DATA ★
                    </div>

                    <form>

                        <label>
                            NAME
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                        />


                        <label>
                            EMAIL
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                        />


                        <label>
                            COURSE
                        </label>

                        <select
                            value={course}
                            onChange={(event) =>
                                setCourse(event.target.value)
                            }
                        >

                            <option value="">
                                Select course
                            </option>

                            <option value="MCA">
                                MCA
                            </option>

                            <option value="BCA">
                                BCA
                            </option>

                            <option value="B.Tech">
                                B.Tech
                            </option>

                            <option value="MBA">
                                MBA
                            </option>

                        </select>


                        <label>
                            MESSAGE
                        </label>

                        <textarea
                            placeholder="Write something..."
                            value={message}
                            onChange={(event) =>
                                setMessage(event.target.value)
                            }
                        />

                    </form>

                </div>


                {/* ========================= */}
                {/* LIVE PREVIEW */}
                {/* ========================= */}

                <div className="preview-card">

                    <div className="card-header">
                        ★ LIVE PROFILE ★
                    </div>

                    <div className="avatar">
                        {name
                            ? name.charAt(0).toUpperCase()
                            : "?"}
                    </div>

                    <h2>
                        {name || "Your Name"}
                    </h2>

                    <p className="email">
                        {email || "your@email.com"}
                    </p>

                    <div className="course">
                        {course || "YOUR COURSE"}
                    </div>

                    <p className="message">
                        {message || "Your message will appear here..."}
                    </p>

                    <div className="card-footer">
                        ♥ LIVE DATA ♥
                    </div>

                </div>

            </div>

        </div>
    );
}

export default App;