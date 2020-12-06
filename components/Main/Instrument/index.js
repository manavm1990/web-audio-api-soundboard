import styles from "./index.css";

export default ({
  caption,
  content,
  trigger,
}) => `<div class="flex flex-column align-center">
  <button class="instrument" data-instrument="${trigger}">${content}</button>
  <p class="btn-caption text-bold">${caption}!</p>
  <strong>(${trigger})</strong>
</div>
`;
