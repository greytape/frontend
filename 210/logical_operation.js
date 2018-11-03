(false && undefined); // false
(false || undefined); // false
((false && undefined) || (false || undefined)); // true
((false || undefined) || (false && undefined)); // true
((false && undefined) && (false || undefined)); // false
((false || undefined) && (false && undefined)); // false
('a' || (false && undefined) || ''); // true
((false && undefined) || 'a' || ''); // true
('a' && (false || undefined) && ''); // true
((false || undefined) && 'a' && ''); // false
