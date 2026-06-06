import { Title, Wrapper } from "./styles";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {title}
      </Title>
    </Wrapper>
  );
};
