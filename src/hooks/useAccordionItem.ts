import { useEffect, useRef, MouseEventHandler, HTMLAttributes } from 'react';
import { ACCORDION_BTN_ATTR } from '../utils/constants';
import { useId } from './useId';
import { useAccordionContext, getItemState } from './useAccordionContext';

const useAccordionItem = <E extends Element>({
  itemKey,
  initialEntered
}: { itemKey?: string | number; initialEntered?: boolean } = {}) => {
  const itemRef = useRef<E>(null);
  const context = useAccordionContext();
  const { setItem, deleteItem, toggle } = context;

  useEffect(() => {
    const key = itemKey ?? itemRef.current!;
    setItem(key, { initialEntered });
    return () => void deleteItem(key);
  }, [setItem, deleteItem, itemKey, initialEntered]);

  const key = itemKey ?? itemRef.current!;
  const state = getItemState(context, key, initialEntered);
  const toggleItem = (toEnter?: boolean) => toggle(key, toEnter);

  const buttonId = useId();
  const panelId = useId();
  const buttonProps: HTMLAttributes<Element> = {
    id: buttonId,
    [ACCORDION_BTN_ATTR]: '',
    'aria-controls': panelId,
    'aria-expanded': state.isEnter,
    onClick: toggleItem as unknown as MouseEventHandler<Element>
  };
  const panelProps: HTMLAttributes<Element> = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };

  return {
    itemRef,
    buttonProps,
    panelProps,
    state,
    toggle: toggleItem
  };
};

export { useAccordionItem };
