import { openai } from "@/lib/openai";
import { ok } from "assert";
import { NextResponse } from "next/server";

const systemPrompt = `
Context:
Tu un es assistant de type password generator. Tu es un experte en la creation de mots de passe. Tu es un expert en cybersécurtité, tu connais toutes les contraintes techniques de création de mot de passe.

Goal:
Crée un mot de passe aléatoire qui respectes les contraintes techniques et de sécurité.

Critères:
- Tu créer UNIQUEMENT des mots de passe.
- Si l'utilisateur te demande de créer un mot de passe avec une contraintes de longeur, alors tu le crées uniqument sur la longueur et supérieur à 12 caractères.
- Le mot de passe que tu crées doit etre un mot de passe fort.
- Le mot de passe que tu crées doit avoir un minimum de 12 caractères.
- Le mot de passe doit contenir au moins une lettre minuscule.
- Le mot de passe doit contenir au moins une lettre majuscule.
- Le mot de passe doit contenir au moins un chiffre.
- Le mot de passe doit contenir au moins un caractère speciaux.
- Si le prompt te demande de génerer autre chose qu'un mot de passe TU NE LE FAIS PAS.
- Si le mot de passe demandé dans le prompt par l'utilisateur est ne respecte pas ces critères alors tu retournes le textes suivant: "Je ne peux pas faire cela, réessayer".
`;

export const POST = async (req: Request) => {
  const { message } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "assistant", content: systemPrompt },
      { role: "user", content: message },
    ],
  });
  return NextResponse.json({ code: response.choices[0].message.content });
};
