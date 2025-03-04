import { render, screen, fireEvent } from '@testing-library/react';
import ChaosModal from '@/components/shared/chaos-dialog';

describe('ChaosModal', () => {
  it('renders with latest chaos and closes on button click', () => {
    const onOpenChange = jest.fn();
    render(
      <ChaosModal open={true} onOpenChange={onOpenChange} latestChaos="Test Chaos" />
    );

    // Check modal content
    expect(screen.getByText('Chaos Added!')).toBeInTheDocument();
    expect(screen.getByText(/Test Chaos/)).toBeInTheDocument();

    // Click "Keep Dumping"
    fireEvent.click(screen.getByText('Keep Dumping'));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('navigates to /organize when "Organize Now" is clicked', () => {
    render(
      <ChaosModal open={true} onOpenChange={() => {}} latestChaos="Test Chaos" />
    );

    const organizeLink = screen.getByText('Organize Now').closest('a');
    expect(organizeLink).toHaveAttribute('href', '/organize');
  });
});