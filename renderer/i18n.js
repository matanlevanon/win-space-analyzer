'use strict';

/*
 * Lightweight i18n for the renderer — English / Hebrew.
 * window.I18N = { t, lang, setLang, apply }
 * Static DOM nodes are translated via [data-i18n] / [data-i18n-title].
 */
(function () {
  const STRINGS = {
    en: {
      docTitle: 'Win Space Analyzer',
      appTitle: '💾 Win Space Analyzer',
      subtitle: 'Find what’s taking up your space',
      backToResults: '↩ Back to results',
      home: '🏠 Home',
      yourDrives: 'Your drives',
      refresh: '↻ Refresh',
      loadingDrives: 'Loading drives…',
      noDrives: 'No drives found',
      allDrives: 'All drives',
      scanAllDesc: 'Scan all fixed drives together',
      scanAllBtn: '🔍 Scan all',
      noLabel: 'No label',
      usedOf: 'Used {used} ({pct}%)',
      freeAmt: 'Free {free}',
      scannedAgo: '✓ Scanned {when} · {size}',
      notScanned: 'Not scanned yet',
      showLast: '📂 Show last scan',
      rescan: '🔄 Rescan',
      scanThis: '🔍 Scan this drive',
      typeRemovable: 'Removable', typeFixed: 'Local disk', typeNetwork: 'Network', typeCD: 'CD-ROM', typeOther: 'Other',
      scanningX: 'Scanning {x} …',
      scanningAll: 'Scanning all drives…',
      filesScanned: '{n} files scanned',
      processing: 'Processing results…',
      cancelScan: 'Cancel scan',
      scanFailed: 'Scan failed',
      scanFailedErr: 'Scan failed: {err}',
      noSavedScan: 'No saved scan found',
      tabBrowse: '🗂️ Browse',
      tabBiggest: '📊 Biggest folders',
      tabChanges: '📈 Changes',
      scannedMeta: 'Scanned {when}',
      sortLabel: 'Sort:',
      sortSizeDesc: 'Size (largest first)',
      sortSizeAsc: 'Size (smallest first)',
      sortNameAsc: 'Name (A → Z)',
      showAbove: 'Show above:',
      highlightAbove: 'Highlight above:',
      colFolderFile: 'Folder / file', colSize: 'Size', colPct: 'Percent',
      totalSize: 'Total {size}',
      filesHere: 'Files in this folder',
      moreItems: '{n} more items',
      openExplorer: '📂 Open in Explorer',
      openExplorerTitle: 'Open the location in Windows Explorer',
      noItems: 'Nothing to show',
      noData: 'No data',
      noDataDisplay: 'No data to display',
      biggestIn: 'Biggest folders in {x}',
      biggestHint: 'Click a row to jump to the folder · Open in Explorer to delete manually',
      colFolder: 'Folder', colPctOfDrive: '% of drive', colCurrentSize: 'Current size', colChange: 'Change',
      changesTitle: 'Changes since the previous scan',
      changesHint: 'Previous scan: {when} · filtered to changes over 50MB',
      newPlus: 'New +{size}',
      folderNotFound: 'Folder not found in the tree',
      cantOpen: 'Could not open the location',
      justNow: 'just now',
      minAgo: '{n} min ago',
      hrAgo: '{n} hr ago',
      yesterday: 'yesterday',
      daysAgo: '{n} days ago',
      moAgo: '{n} mo ago',
      overYear: 'over a year ago',
      volUsed: 'Used {used} of {total}',
      volFree: '{free} free',
      updAvailable: '🎉 A new version is available (v{v})',
      updDownload: '⬇️ Download update',
      updDownloading: 'Downloading update… {p}%',
      updReady: '✅ Update (v{v}) is ready to install',
      updInstall: '🔄 Install & restart',
      checking: 'Checking…',
      vAvailable: 'Version {v} is available!',
      upToDate: 'You’re on the latest version ✓',
      devOnly: 'Update checks are only available in the installed version',
      aboutTitle: 'ℹ️ About & what’s new',
      installedVersion: 'Installed version',
      checkUpdates: '🔄 Check for updates',
      whatsNew: 'What’s new in recent versions',
      yourVersion: '● your version',
      close: 'Close',
      langToggle: 'עברית'  // shown while in English → switches to Hebrew
    },
    he: {
      docTitle: 'ניהול אחסון',
      appTitle: '💾 ניהול אחסון',
      subtitle: 'אתר מה תופס לך מקום',
      backToResults: '↩ חזרה לתוצאות',
      home: '🏠 מסך הבית',
      yourDrives: 'הכוננים שלך',
      refresh: '↻ רענן',
      loadingDrives: 'טוען כוננים…',
      noDrives: 'לא נמצאו כוננים',
      allDrives: 'כל הכוננים',
      scanAllDesc: 'סרוק את כל הכוננים הקבועים יחד',
      scanAllBtn: '🔍 סרוק הכל',
      noLabel: 'ללא תווית',
      usedOf: 'בשימוש {used} ({pct}%)',
      freeAmt: 'פנוי {free}',
      scannedAgo: '✓ נסרק {when} · {size}',
      notScanned: 'טרם נסרק',
      showLast: '📂 הצג אחרונות',
      rescan: '🔄 סרוק מחדש',
      scanThis: '🔍 סרוק כונן זה',
      typeRemovable: 'נשלף', typeFixed: 'קבוע', typeNetwork: 'רשת', typeCD: 'תקליטור', typeOther: 'אחר',
      scanningX: 'סורק את {x} …',
      scanningAll: 'סורק את כל הכוננים…',
      filesScanned: '{n} קבצים נסרקו',
      processing: 'מעבד תוצאות…',
      cancelScan: 'בטל סריקה',
      scanFailed: 'הסריקה נכשלה',
      scanFailedErr: 'הסריקה נכשלה: {err}',
      noSavedScan: 'לא נמצאה סריקה שמורה',
      tabBrowse: '🗂️ עיון',
      tabBiggest: '📊 התיקיות הכי גדולות',
      tabChanges: '📈 שינויים',
      scannedMeta: 'נסרק {when}',
      sortLabel: 'מיון:',
      sortSizeDesc: 'גודל (גדול ← קטן)',
      sortSizeAsc: 'גודל (קטן ← גדול)',
      sortNameAsc: 'שם (א ← ת)',
      showAbove: 'הצג מעל:',
      highlightAbove: 'הדגש מעל:',
      colFolderFile: 'תיקייה / קובץ', colSize: 'גודל', colPct: 'אחוז',
      totalSize: 'סה"כ {size}',
      filesHere: 'קבצים בתיקייה זו',
      moreItems: '{n} פריטים נוספים',
      openExplorer: '📂 פתח בסייר',
      openExplorerTitle: 'פתח את המיקום ב-Windows Explorer',
      noItems: 'אין פריטים להצגה',
      noData: 'אין נתונים',
      noDataDisplay: 'אין נתונים להצגה',
      biggestIn: 'התיקיות הכי גדולות ב־{x}',
      biggestHint: 'לחיצה על שורה קופצת לתיקייה בעץ · פתח בסייר למחיקה ידנית',
      colFolder: 'תיקייה', colPctOfDrive: '% מהכונן', colCurrentSize: 'גודל נוכחי', colChange: 'שינוי',
      changesTitle: 'שינויים מאז הסריקה הקודמת',
      changesHint: 'סריקה קודמת: {when} · מסונן לשינויים מעל 50MB',
      newPlus: 'חדש +{size}',
      folderNotFound: 'התיקייה לא נמצאה בעץ',
      cantOpen: 'לא ניתן לפתוח את המיקום',
      justNow: 'הרגע',
      minAgo: 'לפני {n} דק׳',
      hrAgo: 'לפני {n} שע׳',
      yesterday: 'אתמול',
      daysAgo: 'לפני {n} ימים',
      moAgo: 'לפני {n} חוד׳',
      overYear: 'לפני יותר משנה',
      volUsed: 'בשימוש {used} מתוך {total}',
      volFree: '{free} פנוי',
      updAvailable: '🎉 גרסה חדשה זמינה (v{v})',
      updDownload: '⬇️ הורד עדכון',
      updDownloading: 'מוריד עדכון… {p}%',
      updReady: '✅ העדכון (v{v}) מוכן להתקנה',
      updInstall: '🔄 התקן והפעל מחדש',
      checking: 'בודק…',
      vAvailable: 'גרסה {v} זמינה!',
      upToDate: 'אתה כבר בגרסה האחרונה ✓',
      devOnly: 'בדיקת עדכונים זמינה רק בגרסה המותקנת',
      aboutTitle: 'ℹ️ אודות ומה חדש',
      installedVersion: 'הגרסה המותקנת',
      checkUpdates: '🔄 בדוק עדכונים',
      whatsNew: 'מה חדש בגרסאות האחרונות',
      yourVersion: '● הגרסה שלך',
      close: 'סגור',
      langToggle: 'English'  // shown while in Hebrew → switches to English
    }
  };

  let lang = 'en';
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'he' || saved === 'en') lang = saved;
  } catch (_) {}

  function t(key, vars) {
    let s = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
    if (vars) {
      for (const k of Object.keys(vars)) {
        s = s.split('{' + k + '}').join(String(vars[k]));
      }
    }
    return s;
  }

  // Translate all static [data-i18n] / [data-i18n-title] nodes + document metadata.
  function apply() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.title = t('docTitle');
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      el.title = t(el.getAttribute('data-i18n-title'));
    });
  }

  function setLang(next) {
    lang = next === 'he' ? 'he' : 'en';
    try { localStorage.setItem('lang', lang); } catch (_) {}
    apply();
    if (typeof window.onLanguageChanged === 'function') window.onLanguageChanged(lang);
  }

  window.I18N = {
    t,
    get lang() { return lang; },
    setLang,
    apply,
    locale: () => (lang === 'he' ? 'he-IL' : 'en-US')
  };
})();
