import { useEffect, useState } from "react";
import type { SelectChangeEvent } from "@mui/material";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button, Container, Input, Select, TextArea } from "@/components/ui";
import { colors, typography } from "@/theme";
import toast from "react-hot-toast";
import SimpleNavbar from "@/components/layout/SimpleNavbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const roomOptions = [
  { label: "Deluxe Cottage - ₹12,000 / night", value: "Deluxe Cottage" },
  { label: "Family Suite - ₹16,000 / night", value: "Family Suite" },
  { label: "Forest Villa - ₹18,000 / night", value: "Forest Villa" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  room: "",
  message: "",
};

export default function Booking() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState(initialForm);

  const today = new Date();

  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split("T")[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "checkIn" && form.checkOut) {
      if (new Date(value) >= new Date(form.checkOut)) {
        setForm((prev) => ({
          ...prev,
          checkIn: value,
          checkOut: "",
        }));

        setErrors((prev) => ({
          ...prev,
          checkIn: "",
          checkOut: "",
        }));

        return;
      }
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setForm((prev) => ({
      ...prev,
      room: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      room: "",
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!form.checkIn) {
      newErrors.checkIn = "Select check-in date";
    }

    if (!form.checkOut) {
      newErrors.checkOut = "Select check-out date";
    }

    if (!form.room) {
      newErrors.room = "Please select a room";
    }

    if (!form.checkIn) {
      newErrors.checkIn = "Select check-in date";
    }

    if (!form.checkOut) {
      newErrors.checkOut = "Select check-out date";
    }

    if (form.checkIn && form.checkOut) {
      const checkIn = new Date(form.checkIn);
      const checkOut = new Date(form.checkOut);
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (checkIn < today) {
        newErrors.checkIn = "Check-in cannot be in the past";
      }

      if (checkOut <= checkIn) {
        newErrors.checkOut = "Check-out must be after check-in";
      }

      const diffDays =
        (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24);

      if (diffDays > 30) {
        newErrors.checkOut = "Maximum stay allowed is 30 days";
      }
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const templateParams = {
        ...form,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Booking request submitted successfully!");

      setForm(initialForm);
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit booking request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`
Hi Zi Mist Resort,

Booking Request

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Check In: ${form.checkIn}
Check Out: ${form.checkOut}

Guests: ${form.guests}
Room: ${form.room}

Message:
${form.message}
  `);

    window.open(`https://wa.me/9199029350524?text=${message}`, "_blank");
  };

  return (
    <>
      <SimpleNavbar />

      <section
        className="min-h-screen py-14 md:py-20"
        style={{
          backgroundColor: colors.background.primary,
        }}
      >
        {" "}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full my-8 ml-2   transition xl:my-6 xl:ml-16 cursor-pointer hover:opacity-60"
        >
          <ArrowBackIcon fontSize="medium" />
          back
        </button>
        <Container className="max-w-4xl">
          <div className="mb-12 text-center">
            <p
              className="mb-3 uppercase tracking-[0.3em]"
              style={{
                color: colors.primary.main,
              }}
            >
              Reservation
            </p>

            <h1
              className={typography.hero}
              style={{
                color: colors.text.primary,
              }}
            >
              Book Your Stay
            </h1>

            <p
              className="mx-auto mt-4 max-w-2xl"
              style={{
                color: colors.text.secondary,
              }}
            >
              Experience luxury amidst nature. Submit your inquiry and our team
              will get back to you shortly.
            </p>
          </div>

          <div
            className="rounded-4xl p-6 md:p-10"
            style={{
              backgroundColor: colors.background.secondary,
              border: `1px solid ${colors.border.primary}`,
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <Input
                name="name"
                label="Full Name"
                value={form.name}
                onChange={handleInputChange}
                helperText={errors.name}
              />

              <Input
                name="email"
                type="email"
                label="Email Address"
                value={form.email}
                onChange={handleInputChange}
                helperText={errors.email}
              />

              <Input
                name="phone"
                label="Phone Number"
                value={form.phone}
                onChange={handleInputChange}
                helperText={errors.phone}
              />

              <Input
                name="guests"
                type="number"
                label="Guests"
                value={form.guests}
                onChange={handleInputChange}
              />

              <Input
                name="checkIn"
                type="date"
                label="Check In"
                value={form.checkIn}
                onChange={handleInputChange}
                helperText={errors.checkIn}
                sx={{
                  "& input": {
                    color: colors.text.primary,
                  },

                  "& input::-webkit-calendar-picker-indicator": {
                    filter: "invert(1)",
                    cursor: "pointer",
                  },
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                  htmlInput: {
                    min: localToday,
                  },
                }}
              />

              <Input
                name="checkOut"
                type="date"
                label="Check Out"
                value={form.checkOut}
                onChange={handleInputChange}
                helperText={errors.checkOut}
                sx={{
                  "& input": {
                    color: colors.text.primary,
                  },

                  "& input::-webkit-calendar-picker-indicator": {
                    filter: "invert(1)",
                    cursor: "pointer",
                  },
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                  htmlInput: {
                    min: form.checkIn || localToday,
                  },
                }}
              />

              <div className="md:col-span-2">
                <Select
                  label="Select Room"
                  value={form.room}
                  onChange={handleSelectChange}
                  options={roomOptions}
                  helperText={errors.room}
                />
              </div>

              <div className="md:col-span-2">
                <TextArea
                  name="message"
                  label="Special Requests"
                  placeholder="Any special requirements?"
                  value={form.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    type="submit"
                    fullWidth
                    disabled={loading}
                    startIcon={<CalendarMonthIcon />}
                    sx={{
                      py: 1.6,
                      borderRadius: "999px",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#ffffff",
                      background: `linear-gradient(135deg,
          ${colors.primary.main},
          #d4af37)`,
                      boxShadow: `0 10px 30px ${colors.primary.main}40`,
                      transition: "all 0.3s ease",

                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: `0 15px 40px ${colors.primary.main}60`,
                      },
                    }}
                  >
                    {loading ? "Submitting..." : "Book Now"}
                  </Button>

                  <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    onClick={handleWhatsApp}
                    startIcon={<FaWhatsapp size={20} />}
                    sx={{
                      py: 1.6,
                      borderRadius: "999px",
                      borderWidth: 2,
                      fontWeight: 600,
                      fontSize: "1rem",
                      borderColor: "#25D366",
                      color: "#25D366",

                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
