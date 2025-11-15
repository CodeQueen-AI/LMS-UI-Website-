// "use client";

// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Pencil } from "lucide-react";
// import { FaStar } from "react-icons/fa";
// import { Poppins } from "next/font/google";
// import { useParams } from "next/navigation";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// // ==== Tutor Data ====
// const tutors = [
//   {
//     id: 1,
//     name: "John Doe",
//     subject: "Mathematics",
//     rating: 4.8,
//     image: "/Profile1.jpg",
//     qualification: "M.Sc in Mathematics",
//     introduction: "I’m a dedicated math tutor who loves making numbers simple and exciting.",
//     experience: "5+ years teaching Algebra, Geometry, and Calculus.",
//     subjects2: "Algebra, Geometry, Calculus, Trigonometry",
//     levels: "High School, College",
//     phone: "(111) 222-3333",
//     email: "john@example.com",
//     address: "123 Main Street, New York, USA",
//     nationality: "American",
//   },
//   {
//     id: 2,
//     name: "Sophia Lee",
//     subject: "English Literature",
//     rating: 4.9,
//     image: "/Profile2.jpg",
//     qualification: "MA in English Literature",
//     introduction: "I specialize in helping students express themselves through creative writing.",
//     experience: "6 years of experience in teaching Literature and Poetry.",
//     subjects2: "Poetry, Creative Writing, Grammar, Essays",
//     levels: "Middle School, High School",
//     phone: "(444) 555-6666",
//     email: "sophia@example.com",
//     address: "45 Garden Road, London, UK",
//     nationality: "British",
//   },
//   {
//     id: 3,
//     name: "Aarav Sharma",
//     subject: "Physics",
//     rating: 4.7,
//     image: "/Profile3.jpg",
//     qualification: "B.Sc in Physics",
//     introduction: "Physics enthusiast focusing on conceptual clarity and real-world applications.",
//     experience: "4+ years of experience in Physics coaching.",
//     subjects2: "Mechanics, Thermodynamics, Optics, Electricity",
//     levels: "High School, College",
//     phone: "(777) 888-9999",
//     email: "aarav@example.com",
//     address: "56 Lotus Street, Mumbai, India",
//     nationality: "Indian",
//   },
//   {
//     id: 4,
//     name: "Emma Brown",
//     subject: "Chemistry",
//     rating: 4.6,
//     image: "/Profile4.jpg",
//     qualification: "M.Sc in Chemistry",
//     introduction: "Helping students understand chemistry with fun experiments and easy explanations.",
//     experience: "5 years of teaching Chemistry to various levels.",
//     subjects2: "Organic, Inorganic, Physical Chemistry, Experiments",
//     levels: "High School, College",
//     phone: "(000) 123-4567",
//     email: "emma@example.com",
//     address: "78 Maple Avenue, Toronto, Canada",
//     nationality: "Canadian",
//   },
// ];

// export default function TutorDetailPage() {
//   const params = useParams();
//   const { id } = params;
//   const tutor = tutors.find((t) => t.id === Number(id));

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [tutorImage, setTutorImage] = useState<string | null>(null);
//   const [editingField, setEditingField] = useState<string | null>(null);

//   const [name, setName] = useState(tutor?.name || "");
//   const [subject, setSubject] = useState(tutor?.subject || "");
//   const [rating, setRating] = useState(tutor?.rating || 0);
//   const [phone, setPhone] = useState(tutor?.phone || "");
//   const [email, setEmail] = useState(tutor?.email || "");
//   const [address, setAddress] = useState(tutor?.address || "");
//   const [nationality, setNationality] = useState(tutor?.nationality || "");
//   const [qualification, setQualification] = useState(tutor?.qualification || "");
//   const [introduction, setIntroduction] = useState(tutor?.introduction || "");
//   const [experience, setExperience] = useState(tutor?.experience || "");
//   const [subjects2, setSubjects2] = useState(tutor?.subjects2 || "");
//   const [levels, setLevels] = useState(tutor?.levels || "");

//   if (!tutor) {
//     return (
//       <div
//         className={`min-h-screen flex items-center justify-center text-gray-600 ${poppins.className}`}
//       >
//         Tutor not found.
//       </div>
//     );
//   }

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setTutorImage(event.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const imageToShow = tutorImage || tutor.image;

//   // ==== Animations Config ====
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const fadeRight = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
//   };

//   const stagger = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const EditableBoxCard = ({
//     label,
//     value,
//     setter,
//     fieldKey,
//     type = "text",
//   }: any) => (
//     <motion.div
//       variants={fadeUp}
//       className="w-full flex border-l-4 border-blue-900 p-4 mb-4 relative group bg-white/70 hover:shadow-md transition"
//     >
//       <div className="flex-1">
//         <h4 className="text-sm font-semibold text-gray-700 mb-2">{label}</h4>
//         {editingField === fieldKey ? (
//           type === "textarea" ? (
//             <textarea
//               value={value}
//               onChange={(e) => setter(e.target.value)}
//               onBlur={() => setEditingField(null)}
//               autoFocus
//               rows={3}
//               className="w-full text-gray-700 border border-gray-300 rounded-md p-2 focus:outline-none resize-none"
//             />
//           ) : (
//             <input
//               type={type}
//               value={value}
//               onChange={(e) => setter(e.target.value)}
//               onBlur={() => setEditingField(null)}
//               autoFocus
//               className="w-full text-gray-700 border border-gray-300 rounded-md p-2 focus:outline-none"
//             />
//           )
//         ) : (
//           <p className="text-gray-700">{value || "—"}</p>
//         )}
//       </div>
//       <button
//         onClick={() => setEditingField(fieldKey)}
//         className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-600 transition"
//       >
//         <Pencil size={16} />
//       </button>
//     </motion.div>
//   );

//   const EditableBox = ({
//     label,
//     value,
//     setter,
//     fieldKey,
//     type = "text",
//   }: any) => (
//     <motion.div variants={fadeUp} className="w-full relative group mt-1">
//       <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
//         {label}
//       </h4>
//       {editingField === fieldKey ? (
//         <input
//           type={type}
//           value={value}
//           onChange={(e) => setter(e.target.value)}
//           onBlur={() => setEditingField(null)}
//           autoFocus
//           className="w-full text-sm text-gray-700 mt-1 border border-gray-300 rounded-md p-1 focus:outline-none"
//         />
//       ) : (
//         <p className="text-sm text-gray-700 mt-1">{value || "—"}</p>
//       )}
//       <button
//         onClick={() => setEditingField(fieldKey)}
//         className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-600 transition"
//       >
//         <Pencil size={16} />
//       </button>
//     </motion.div>
//   );

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={stagger}
//       className={`min-h-screen flex flex-col items-start px-10 py-10 ${poppins.className}`}
//     >
//       <div className="flex flex-col md:flex-row w-full gap-10">

//         {/* ==== Left Profile Card ==== */}
//         <motion.div
//           variants={fadeUp}
//           className="flex flex-col items-center p-6 w-100 border border-gray-300 bg-white shadow-sm rounded-md transform translate-y-4 hover:-translate-y-1 transition-all duration-300"
//         >
//           <div className="relative group">
//             <Image
//               src={imageToShow}
//               alt="Tutor Image"
//               width={200}
//               height={200}
//               className="border-2 border-gray-200 h-64 object-cover"
//             />
//             <button
//               onClick={() => fileInputRef.current?.click()}
//               className="absolute top-2 right-2 bg-blue-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
//             >
//               <Pencil size={16} />
//             </button>
//             <input
//               type="file"
//               ref={fileInputRef}
//               accept="image/*"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </div>

//           <div className="mt-5 text-center w-full">
//             <div className="relative group inline-block max-w-full">
//               {editingField === "name" ? (
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   onBlur={() => setEditingField(null)}
//                   autoFocus
//                   className="text-3xl font-medium font-serif text-center border-b border-gray-300 focus:outline-none px-1 truncate max-w-[200px]"
//                 />
//               ) : (
//                 <h2 className="text-2xl font-medium font-serif truncate max-w-[200px]">{name}</h2>
//               )}
//               <button
//                 onClick={() => setEditingField("name")}
//                 className="cursor-pointer absolute top-2 -right-15 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-900 transition"
//               >
//                 <Pencil size={16} />
//               </button>
//             </div>

//             <div className="relative group mt-2">
//               {editingField === "subject" ? (
//                 <input
//                   type="text"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   onBlur={() => setEditingField(null)}
//                   autoFocus
//                   className="text-sm font-medium text-blue-900 border-b border-gray-300 focus:outline-none rounded px-2 py-0.5"
//                 />
//               ) : (
//                 <span className="inline-block bg-blue-100 text-blue-900 text-sm font-medium rounded-full px-3 py-1">
//                   {subject}
//                 </span>
//               )}
//               <button
//                 onClick={() => setEditingField("subject")}
//                 className="cursor-pointer absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-900 transition"
//               >
//                 <Pencil size={14} />
//               </button>
//             </div>
//           </div>

//           <div className="mt-4 flex items-center justify-center space-x-1">
//             {Array.from({ length: 5 }, (_, i) => (
//               <FaStar
//                 key={i}
//                 className={`${i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"} text-lg`}
//               />
//             ))}
//           </div>

//           <div className="mt-5 w-full text-sm text-gray-700 space-y-2">
//             <EditableBox label="Phone Number" value={phone} setter={setPhone} fieldKey="phone" />
//             <EditableBox label="Email" value={email} setter={setEmail} fieldKey="email" type="email" />
//             <EditableBox label="Address" value={address} setter={setAddress} fieldKey="address" />
//             <EditableBox label="Nationality" value={nationality} setter={setNationality} fieldKey="nationality" />
//           </div>
//         </motion.div>

//         {/* ==== Right Column ==== */}
//         <motion.div
//           variants={fadeRight}
//           className="flex flex-col w-full border border-gray-300 bg-white p-6 rounded-md shadow-sm"
//         >
//           <h2 className="text-4xl font-semibold mb-6 text-blue-900">Additional Information</h2>

//           <EditableBoxCard label={`${name} is qualified from`} value={qualification} setter={setQualification} fieldKey="qualifiedFrom" />
//           <EditableBoxCard label="Introduction" value={introduction} setter={setIntroduction} fieldKey="introduction" type="textarea" />
//           <EditableBoxCard label="Experience" value={experience} setter={setExperience} fieldKey="experience" />
//           <EditableBoxCard label={`${name} is good at teaching`} value={subjects2} setter={setSubjects2} fieldKey="subjects2" type="textarea" />
//           <EditableBoxCard label={`${name} can teach at different levels`} value={levels} setter={setLevels} fieldKey="levels" type="textarea" />
//         </motion.div>
//       </div>

//       {/* ==== Button ==== */}
//       <motion.div
//         variants={fadeUp}
//         className="flex justify-center mt-8 w-full"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className="px-10 py-5 bg-white border-2 border-blue-900 text-blue-900 cursor-pointer font-medium shadow-md transition duration-300 hover:bg-blue-900 hover:text-white hover:border-white rounded-md"
//         >
//           Book a Session
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }











"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { useParams } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ==== Tutor Data ====
const tutors = [
  {
    id: 1,
    name: "John Doe",
    subject: "Mathematics",
    rating: 4.8,
    image: "/Profile1.jpg",
    qualification: "M.Sc in Mathematics",
    introduction: "I’m a dedicated math tutor who loves making numbers simple and exciting.",
    experience: "5+ years teaching Algebra, Geometry, and Calculus.",
    subjects2: "Algebra, Geometry, Calculus, Trigonometry",
    levels: "High School, College",
    phone: "(111) 222-3333",
    email: "john@example.com",
    address: "123 Main Street, New York, USA",
    nationality: "American",
  },
  {
    id: 2,
    name: "Sophia Lee",
    subject: "English Literature",
    rating: 4.9,
    image: "/Profile2.jpg",
    qualification: "MA in English Literature",
    introduction: "I specialize in helping students express themselves through creative writing.",
    experience: "6 years of experience in teaching Literature and Poetry.",
    subjects2: "Poetry, Creative Writing, Grammar, Essays",
    levels: "Middle School, High School",
    phone: "(444) 555-6666",
    email: "sophia@example.com",
    address: "45 Garden Road, London, UK",
    nationality: "British",
  },
  {
    id: 3,
    name: "Aarav Sharma",
    subject: "Physics",
    rating: 4.7,
    image: "/Profile3.jpg",
    qualification: "B.Sc in Physics",
    introduction: "Physics enthusiast focusing on conceptual clarity and real-world applications.",
    experience: "4+ years of experience in Physics coaching.",
    subjects2: "Mechanics, Thermodynamics, Optics, Electricity",
    levels: "High School, College",
    phone: "(777) 888-9999",
    email: "aarav@example.com",
    address: "56 Lotus Street, Mumbai, India",
    nationality: "Indian",
  },
  {
    id: 4,
    name: "Emma Brown",
    subject: "Chemistry",
    rating: 4.6,
    image: "/Profile4.jpg",
    qualification: "M.Sc in Chemistry",
    introduction: "Helping students understand chemistry with fun experiments and easy explanations.",
    experience: "5 years of teaching Chemistry to various levels.",
    subjects2: "Organic, Inorganic, Physical Chemistry, Experiments",
    levels: "High School, College",
    phone: "(000) 123-4567",
    email: "emma@example.com",
    address: "78 Maple Avenue, Toronto, Canada",
    nationality: "Canadian",
  },
];

interface EditableProps {
  label: string;
  value: string;
  setter: (val: string) => void;
  fieldKey: string;
  type?: string;
}

export default function TutorDetailPage() {
  const params = useParams();
  const { id } = params;
  const tutor = tutors.find((t) => t.id === Number(id));

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [tutorImage, setTutorImage] = useState<string | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);

  const [name, setName] = useState(tutor?.name || "");
  const [subject, setSubject] = useState(tutor?.subject || "");
  const [rating] = useState(tutor?.rating || 0); // setRating removed
  const [phone, setPhone] = useState(tutor?.phone || "");
  const [email, setEmail] = useState(tutor?.email || "");
  const [address, setAddress] = useState(tutor?.address || "");
  const [nationality, setNationality] = useState(tutor?.nationality || "");
  const [qualification, setQualification] = useState(tutor?.qualification || "");
  const [introduction, setIntroduction] = useState(tutor?.introduction || "");
  const [experience, setExperience] = useState(tutor?.experience || "");
  const [subjects2, setSubjects2] = useState(tutor?.subjects2 || "");
  const [levels, setLevels] = useState(tutor?.levels || "");

  if (!tutor) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center text-gray-600 ${poppins.className}`}
      >
        Tutor not found.
      </div>
    );
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setTutorImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageToShow = tutorImage || tutor.image;

  // ==== Animations Config ====
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const EditableBoxCard = ({ label, value, setter, fieldKey, type = "text" }: EditableProps) => (
    <motion.div
      variants={fadeUp}
      className="w-full flex border-l-4 border-blue-900 p-4 mb-4 relative group bg-white/70 hover:shadow-md transition"
    >
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">{label}</h4>
        {editingField === fieldKey ? (
          type === "textarea" ? (
            <textarea
              value={value}
              onChange={(e) => setter(e.target.value)}
              onBlur={() => setEditingField(null)}
              autoFocus
              rows={3}
              className="w-full text-gray-700 border border-gray-300 rounded-md p-2 focus:outline-none resize-none"
            />
          ) : (
            <input
              type={type}
              value={value}
              onChange={(e) => setter(e.target.value)}
              onBlur={() => setEditingField(null)}
              autoFocus
              className="w-full text-gray-700 border border-gray-300 rounded-md p-2 focus:outline-none"
            />
          )
        ) : (
          <p className="text-gray-700">{value || "—"}</p>
        )}
      </div>
      <button
        onClick={() => setEditingField(fieldKey)}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-600 transition"
      >
        <Pencil size={16} />
      </button>
    </motion.div>
  );

  const EditableBox = ({ label, value, setter, fieldKey, type = "text" }: EditableProps) => (
    <motion.div variants={fadeUp} className="w-full relative group mt-1">
      <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
        {label}
      </h4>
      {editingField === fieldKey ? (
        <input
          type={type}
          value={value}
          onChange={(e) => setter(e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="w-full text-sm text-gray-700 mt-1 border border-gray-300 rounded-md p-1 focus:outline-none"
        />
      ) : (
        <p className="text-sm text-gray-700 mt-1">{value || "—"}</p>
      )}
      <button
        onClick={() => setEditingField(fieldKey)}
        className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-600 transition"
      >
        <Pencil size={16} />
      </button>
    </motion.div>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className={`min-h-screen flex flex-col items-start px-10 py-10 ${poppins.className}`}
    >
      <div className="flex flex-col md:flex-row w-full gap-10">

        {/* ==== Left Profile Card ==== */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center p-6 w-100 border border-gray-300 bg-white shadow-sm rounded-md transform translate-y-4 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative group">
            <Image
              src={imageToShow}
              alt="Tutor Image"
              width={200}
              height={200}
              className="border-2 border-gray-200 h-64 object-cover"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute top-2 right-2 bg-blue-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
            >
              <Pencil size={16} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div className="mt-5 text-center w-full">
            <div className="relative group inline-block max-w-full">
              {editingField === "name" ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setEditingField(null)}
                  autoFocus
                  className="text-3xl font-medium font-serif text-center border-b border-gray-300 focus:outline-none px-1 truncate max-w-[200px]"
                />
              ) : (
                <h2 className="text-2xl font-medium font-serif truncate max-w-[200px]">{name}</h2>
              )}
              <button
                onClick={() => setEditingField("name")}
                className="cursor-pointer absolute top-2 -right-15 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-900 transition"
              >
                <Pencil size={16} />
              </button>
            </div>

            <div className="relative group mt-2">
              {editingField === "subject" ? (
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onBlur={() => setEditingField(null)}
                  autoFocus
                  className="text-sm font-medium text-blue-900 border-b border-gray-300 focus:outline-none rounded px-2 py-0.5"
                />
              ) : (
                <span className="inline-block bg-blue-100 text-blue-900 text-sm font-medium rounded-full px-3 py-1">
                  {subject}
                </span>
              )}
              <button
                onClick={() => setEditingField("subject")}
                className="cursor-pointer absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-900 transition"
              >
                <Pencil size={14} />
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center space-x-1">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`${i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"} text-lg`}
              />
            ))}
          </div>

          <div className="mt-5 w-full text-sm text-gray-700 space-y-2">
            <EditableBox label="Phone Number" value={phone} setter={setPhone} fieldKey="phone" />
            <EditableBox label="Email" value={email} setter={setEmail} fieldKey="email" type="email" />
            <EditableBox label="Address" value={address} setter={setAddress} fieldKey="address" />
            <EditableBox label="Nationality" value={nationality} setter={setNationality} fieldKey="nationality" />
          </div>
        </motion.div>

        {/* ==== Right Column ==== */}
        <motion.div
          variants={fadeRight}
          className="flex flex-col w-full border border-gray-300 bg-white p-6 rounded-md shadow-sm"
        >
          <h2 className="text-4xl font-semibold mb-6 text-blue-900">Additional Information</h2>

          <EditableBoxCard label={`${name} is qualified from`} value={qualification} setter={setQualification} fieldKey="qualifiedFrom" />
          <EditableBoxCard label="Introduction" value={introduction} setter={setIntroduction} fieldKey="introduction" type="textarea" />
          <EditableBoxCard label="Experience" value={experience} setter={setExperience} fieldKey="experience" />
          <EditableBoxCard label={`${name} is good at teaching`} value={subjects2} setter={setSubjects2} fieldKey="subjects2" type="textarea" />
          <EditableBoxCard label={`${name} can teach at different levels`} value={levels} setter={setLevels} fieldKey="levels" type="textarea" />
        </motion.div>
      </div>

      {/* ==== Button ==== */}
      <motion.div
        variants={fadeUp}
        className="flex justify-center mt-8 w-full"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-5 bg-white border-2 border-blue-900 text-blue-900 cursor-pointer font-medium shadow-md transition duration-300 hover:bg-blue-900 hover:text-white hover:border-white rounded-md"
        >
          Book a Session
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
