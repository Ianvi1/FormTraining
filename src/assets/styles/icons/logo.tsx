const SVGlogo = ({ ...props}: React.SVGProps<SVGSVGElement>) => {
  return (
  <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
  <rect width="500" height="500" rx="250" fill="#0E0C0D"/>
  <path d="M314.7 348H256.2L186.45 150H245.4L285.45 280.8L325.65 150H384.45L314.7 348Z" fill="white"/>
  <path d="M156.3 150H208.5V348H156.3V150Z" fill="#E02946"/>
  <line x1="125" y1="345" x2="339" y2="345" stroke="#0E0C0D" stroke-width="2"/>
  <line x1="125" y1="341.1" x2="339" y2="341.1" stroke="#0E0C0D" stroke-width="1.8"/>
  <line x1="125" y1="346.35" x2="339" y2="346.35" stroke="#0E0C0D" stroke-width="1.3"/>
 
  </svg>
  );
};

export default SVGlogo;