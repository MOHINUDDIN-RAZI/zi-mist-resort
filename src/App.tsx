import ChatBot from "./components/chatbot/ChatBot";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            marginTop: "40px",
            minWidth: "340px",
            padding: "12px 14px",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: 500,
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            backdropFilter: "blur(10px)",
          },

          success: {
            style: {
              background: "rgba(34, 197, 94, 0.12)",
              color: "#ffffff",
              border: "1px solid rgba(34, 197, 94, 0.3)",
            },
          },

          error: {
            style: {
              background: "rgba(239, 68, 68, 0.12)",
              color: "#ffffff",
              border: "1px solid rgba(239, 68, 68, 0.3)",
            },
          },

          loading: {
            style: {
              background: "rgba(255, 255, 255, 0.08)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          },
        }}
      />
      <AppRoutes />
      <ChatBot />
    </>
  );
}

export default App;
