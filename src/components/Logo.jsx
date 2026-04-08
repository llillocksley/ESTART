export default function Logo() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}locksley-icon.png`}
      alt="Emeka Goodness Logo"
      loading="lazy"
      style={{ width: "60px", height: "50px" }}
    />
  );
}
